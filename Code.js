var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://hiring.bajajfinservhealth.in/api/renderMe?login&avatar_url&html_url&type',
  'headers': {
    'login': '',
    'avatar_url': '',
    'html_url': '',
    'type': ''
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
