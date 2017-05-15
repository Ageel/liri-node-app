var twitter = require("./keys.js");
var handles = process.argv[2];
var Twitter = require('twitter');
// var movieChoice = process.argv[3]

// NPM Package for reading and writing files
var fs = require("fs");

// Running the readFile module that's inside of fs.
// Stores the read information into the variable "data"
// fs.readFile("random.txt", "utf8", function(err, data) {

  
//     console.log(data);
 

// });

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");
var movieName = process.argv[3];

if (handles=="movie-this"){
    // Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t="+movieName+"&y=&plot=short&tomatoes=true&r=json", function(error, response, body) {
// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&tomatoes=true&r=json", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and extract the following data for the movie:
    //   * Title of the movie.
    //   * Year the movie came out.
    //   * IMDB Rating of the movie.
    //   * Country where the movie was produced.
    //   * Language of the movie.
    //   * Plot of the movie.
    //   * Actors in the movie.
    //   * Rotten Tomatoes URL.
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    
    console.log("The movie's title is: " + JSON.parse(body).Title);
    console.log("The movie's year of release is: " + JSON.parse(body).Year);
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    console.log("The movie's Country is: " + JSON.parse(body).Country);
    console.log("The movie's language is: " + JSON.parse(body).Language);
    console.log("The movie's plot is: " + JSON.parse(body).Plot);
    console.log("The movie's actors are: " + JSON.parse(body).Actors);
    console.log("The movie's Rotten Tomato URL is: " + JSON.parse(body).tomatoURL);
    // console.log(JSON.parse(body));      
  }
})

} else if (handles=='my-tweets'){
    var client = new Twitter({
  consumer_key: 'tAIPqMe2p5uGxsPkclAODweca',
  consumer_secret: 'A63wcBu7PVvuYZ2r3JNTjc9F8ITltLOS4ypRxoptT7Uyok7VX7',
  access_token_key: '862146117655461888-5pbX9dzqt6dRMrHlB1o1MIi4JZSFcc1',
  access_token_secret: '8fm7SnmShwRjOUVPs0GAI8pnanAmvwh9CoHHUOD7a2Ulj'
});
 
var params = {screen_name: 'AgeelWeb', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {

    for (var i = 0; i < tweets.length; i++){
        console.log(JSON.stringify(tweets[i].text, null, 2));
    }

  }
})
} else if (handles=='spotify-this-song'){
  var spotify = require('spotify');
  var replaced = process.argv[3].replace(/\s/g, '+');
  console.log(replaced);
spotify.search({ type: 'track', query: replaced, limit: 20}, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    var data = data.tracks.items[0];
    // Do something with 'data' 
    // console.log(JSON.stringify(data, null, 2));
    // console.log(data);
    console.log("The artist name is: "+ data.artists[0].name);
    console.log("The song name is: "+ data.name);
    console.log("The preview url link is: "+ data.external_urls.spotify);
    console.log("The album name is: "+ data.album.name);
    console.log(data.album);
    
  
});
}
var stringToSearch= process.argv[3];
for (var i=0; i<stringToSearch.length; i++){
  console.log(stringToSearch[i]);
}

// var spotify = require('spotify');
// spotify.search({ type: 'track', query: 'mandjou', limit: 2}, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
//     var data = data.tracks.items[0]
//     // Do something with 'data' 
//     // console.log(JSON.stringify(data, null, 2));
//     // console.log(data);
//     console.log(data.name);
//     console.log(data.external_urls.spotify);
//     console.log(data.artists[0].name);
//     // console.log(data.album);
//     console.log(data.album.name);
  
// });
 


// spotify.search({ type: 'artist OR album OR track', query: 'mandjou', limit: 20}, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
 
//     // Do something with 'data' 
//     console.log(JSON.stringify(data, null, 2));
// });
 

// function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, hollaback)


  // console.log(data.tracks.items.name); //song track name
  //   console.log(data.album.href); //url 
  //   console.log(data.album.name); //album name
  //   console.log(data.preview_url); //preview link to the song