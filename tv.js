let fs = require('fs');
let request = require('request');
let queryType = "shows";
let query = "game+of+thrones";

// request(url, function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   console.log('body:', body);
//   let parsed = JSON.parse(body);
//   let name = parsed[0].show.name;
//   let genre = parsed[0].show.genres;
//   let rating = parsed[0].show.rating.average;
//   let network = parsed[0].show.network.name;
//   let summary = parsed[0].show.summary;
//   console.log(name, genre, rating, network, summary);
// });

const Tv = function(queryType, query){
    this.queryType = queryType;
    this.query = query;
    this.url = "http://api.tvmaze.com/search/" + queryType + "?q=" + query;

    this.findShow = function(){
        
        request(this.url, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      //   console.log('body:', body);
        let parsed = JSON.parse(body);
        let name = parsed[0].show.name;
        let genre = parsed[0].show.genres;
        let rating = parsed[0].show.rating.average;
        let network = parsed[0].show.network.name;
        let summary = parsed[0].show.summary;
        console.log(name, genre, rating, network, summary);
        let string ="NAME: " + name + "GENRE: " + genre + "RATING: " +  rating + "NETWORK: " + network + "SUMMARY: " + summary;
        fs.appendFile("log.txt", string, function(err){

            if(err){
                return console.log(err);
         
            }
            console.log("log.txt was updated!");
        })
    
    });
}

      this.findActor = function(){
      request(this.url, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      //   console.log('body:', body);
        let parsed = JSON.parse(body);
        let name = parsed[0].person.name;
        let birthday = parsed[0].person.birthday;
        let gender = parsed[0].person.gender;
        let country = parsed[0].person.country;
        let mazeURL = parsed[0].person._links.self.href;
        console.log(name, birthday, gender, country, mazeURL);
        let string ="NAME: " + name + "BIRTHDAY: " + birthday + "GENDER: " +  gender + "COUNTRY: " + country + "TV MAZE URL: " + mazeURL;
        fs.appendFile("log.txt", string, function(err){

            if(err){
                return console.log(err);
         
            }
            console.log("log.txt was updated!");
        })
      });

    }
}

module.exports = Tv;
