const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);


async function verify(token) {
  let user = {}
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
  });
  user.name = ticket.payload.name,
  user.email = ticket.payload.email,
  user.imageUrl = ticket.payload.picture
  return user;
}

async function checkAuthenticated(req, res, next){
    if(process.env.NODE_ENV == 'test'){
        next();
    }
    else{
        let token = req.headers['token']
        try{
            req.user = await verify(token)
            next();
        }
        catch(error){
            res.status(403).json({
                message: 'Invalid token',
                error: error
            })
        
        }
    }
}


module.exports = checkAuthenticated;
