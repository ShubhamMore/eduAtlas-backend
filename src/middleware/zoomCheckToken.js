const Zoomuser = require('../model/zoomCredentials.model')
const errorHandler = require('../service/errorHandler');
const request = require('request')
const rp = require('request-promise')

const checkTokenAuth = async(req,res)=>{
    try {
    
        const user = await Zoomuser.findOne({
            userId:req.body.userId
        })

        if(!user){
            throw new Error()
        }

        const currentTimeStamp = new Date().getTime() / 1000  
        console.log(currentTimeStamp > user.expires_in)      
    
        if (currentTimeStamp > user.expires_in) {
            //console.log("refresh ",user.refresh_token,typeof(user.refresh_token))
            var options = {
          
                method: 'POST',
                url: 'https://zoom.us/oauth/token',
                qs: {
                grant_type: 'refresh_token',
                refresh_token: user.refresh_token 
                },
                headers: {
                    /**The credential below is a sample base64 encoded credential. Replace it with "Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64')"
                    **/
                    authorization: 'Basic '+Buffer.from(user.client_id+':'+user.client_secret_id).toString('base64')
                    }
            };
        
            let body = await rp(options)
            //console.log(body)
            body = JSON.parse(body) 
        
            console.log("json",body)
       
            const currentTime = new Date().getTime() / 1000

            const expires_in = body.expires_in + currentTime
            const update = await ZoomUser.updateOne({
                userName:req.query.userName
            },{
                $set:{
                    access_token: body.access_token,
                    refresh_token:body.refresh_token,
                    expires_in: expires_in
            }
            },{
                multi:true
            })  
            next()
            return
        }
        req.zoom = user
        next()    
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

module.exports = checkTokenAuth