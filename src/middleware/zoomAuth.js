const Zoomuser = require('../model/zoomCredentials.model')

const zoomAuth = async(req,res,next)=>{
    try {
        const user = await Zoomuser.findOne({
            userId:req.body.instituteId
            
        })
        const redirectURL = "http://localhost:5000/institute/zoom/generateZoomAuthToken?userId="+user.userId   
        const authLink = 'https://zoom.us/oauth/authorize?response_type=code&client_id=' + user.client_id + '&redirect_uri=' + redirectURL  
        
        res.send({authLink})

    } catch (error) {
        
    }
}

module.exports = zoomAuth