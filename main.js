// config variable
var host          = "https://tuantestingonly.auth.us-east-1.amazoncognito.com/oauth2/token"
var client_id     = "7otrj3fst7t6gqvqbphg5clmrq"
var redirect_uri  = "http://localhost:3000"

// fix variable
var grant_type = "authorization_code"

var url = window.location.href
var code = /code=([^&]+)/.exec(url)[1]; 

var body = {
  grant_type: grant_type, 
  client_id: client_id,
  redirect_uri: redirect_uri,
  code: code
} 

const searchParams = Object.keys(body).map((key) => {
  return encodeURIComponent(key) + '=' + encodeURIComponent(body[key]);
}).join('&');

fetch(host, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: searchParams
}).then(function(response) {
  return response.json()
}).then(function(myJson) {
  console.log('\nhere is your token');
  console.log(myJson);

  var token = myJson.access_token;
  var decoded = jwt_decode(token);

  console.log('\nhere is your group');
  console.log(decoded);
})
