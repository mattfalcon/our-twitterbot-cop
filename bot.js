//Telling Node we're using twit and node-twitterbot
var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;

//use heroku config variables
var Bot = new TwitterBot ({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

//instantiating an array with a number of phrases
var phraseArray = [
                    "Tillerson said #trump is a moron",
                    "#startrek discovery",
                    "Lebron said #trump is a bum",
                    "rand paul called #trump gollum",
                    "Adam Sandler, David Spade, Chris Farley",
                    "delete ur account",
                    "it me",
                    "same",
                    "#dogpants go on 4legs",
                    "#thedress is blue and black"
];

//function to choose random array 
function chooseRandom(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];  
}

//saving array as variable
var phrase = chooseRandom(phraseArray) + ", " + 
chooseRandom(phraseArray);

//node-twitterbot's bot.tweet function
Bot.tweet(phrase);
