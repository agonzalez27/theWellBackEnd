var request = require('request');

module.exports = {
  mediaRequest: mediaRequest
}

function mediaRequest(req, res) {
  request('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAv-ensAwoferCBsAht8KLjZBvhqCi-PeY&channelId=UCZCzpkMuC8jMiiUmBCH7TNA&part=snippet,id&order=date&maxResults=20', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(error)
    }
    res.json(JSON.parse(body));
    console.log(body);
  })
};
