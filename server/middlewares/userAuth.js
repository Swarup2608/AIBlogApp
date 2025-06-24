import JWT from 'jsonwebtoken'

const userAuth = (req,res,next) =>{
    try {
        const {token} = req.headers;
        if(!token){
            return res.json({success:false,message:'Token Not Found! Login Again!'})
        }
        const token_decode = JWT.decode(token);
        req.body = req.body || {};
        req.body.userId = token_decode.userId;
        next()
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export default userAuth