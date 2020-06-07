const Zoomuser = require('../model/zoomCredentials.model')
const errorHandler = require('../service/errorHandler');
const request = require('request')
const rp = require('request-promise')

const zoomToken = async(req,res)=>{
    try {
        
        const user = await Zoomuser.findOne({
            userId:req.query.userId
        })

        if(!user){
            throw new Error("No Zoom Credentials Found");
        }
        const redirectURL = "http://localhost:5000/institute/zoom/generateZoomAuthToken?userId="+req.query.userId
        let options = {
            method: 'POST',
            url: 'https://zoom.us/oauth/token',
            qs: {
             grant_type: 'authorization_code',
             //The code below is a sample authorization code. Replace it with your actual authorization code while making requests.
             code: req.query.code,
              //The uri below is a sample redirect_uri. Replace it with your actual redirect_uri while making requests.
             redirect_uri: redirectURL
            },
            headers: {
              /**The credential below is a sample base64 encoded credential. Replace it with "Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64')"
              **/
             Authorization: 'Basic '+Buffer.from(user.client_id+':'+user.client_secret_id).toString('base64'),

            
            }
        };

        let body = await rp(options)
        body = JSON.parse(body)

        const currentTime = new Date().getTime() / 1000

        const expires_in = body.expires_in + currentTime

        const update = await Zoomuser.updateOne({
            userId:req.body.userId
        },{
            $set:{
                access_token: body.access_token,
                refresh_token:body.refresh_token,
                expires_in: expires_in
            }
        },{
            multi:true
        })
        res.status(200).send(body)
        
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

module.exports = zoomToken