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
                    "@adamsandler 's best movie was bulletproof",
                    "delete ur account",
                    "#covfefe and #fakenews",
                    "@joshinnesshow eats poo",
                    "Is @JLin7 the next Jordan? #NBA #Nets",
                    "@mikemeltser has HILARIOUS tweets",
                    "did you see #SNL, did it make you LOL?",
                    "#dogpants go on 4legs",
                    "LOL ROFLMAO",
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
