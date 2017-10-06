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

//handle array
var handleArray = [
    "@adamsandler",
    "@davidspade",
    "@joshinnesshow",
    "@DonaldJTrumpJr",
    "@claytravis",
    "@mikemeltser",
    "@lopezonsports",
    "@rjchoppy",
    "@1053SS",
    "@SportsMT",
    "@LanceZierlein",
    "@JimMudd",
    "@gavindawson",
    "@macengelprof",
    "@johnstamos",
    "@ochocinco",
    "@STOP_PRE",
    "@BenRogers",
    "@danrafaelespn",
    "@SandlerJ",
    "@TommySledge",
    "@justinbieber",
    "@jeremybieber",
    "@jonjones",
    "@gallantsays",
    "@shawnbijani",
    "@colincowherd",
    "@bstrawradio",
    "@carmeloanthony",
    "@dmorey",
    "@jayglazer",
    "@tyrese",
    "@ludacris",
    "@redrock_bball"
]


//instantiating an array with a number of phrases
var phraseArray = [
                    "You Eat Pieces of S-T for Breakfast?",
                    "Oh Really Fool?",
                    "I Don't Want to go to Jail - I'm fragile",
                    "Here are some aspirin. they make your head seem smaller",
                    "It's hard to soar with the eagles, when you're surrounded by turkeys",
                    "Now That's What I call High Quality H20!",
                    "The hideousness of that foot will haunt my dreams forever",
                    "Scuba Steve",
                    "You're going to die, clown!",
                    "You're My Closest Friend, And I don't even Like you",
                    "@joshinnesshow eats poo",
                    "Is @JLin7 the next Jordan? #NBA #Nets",
                    "I got wicked bad frost bite when I was in the scouts",
                    "@mikemeltser has HILARIOUS tweets",
                    "How did I get into these pajamas?",
                    "#dogpants go on 4legs",
                    "LOL ROFLMAO",
                    "You ain't cool unless you pee your pants",
                    "Why don't you just go home, are you too good for your home?",
                    "I don't know how to fight, I'm a comedian!",
                    "Chlorophyll? More Like BORophyll!!",
                    "the cops zapped him with a taser until he went bald!",
                    "Donkey Kong Sucks!",
                    "I gotta send him back to the South Pole",
                    "Suntan lotion is good for me",
                    "Golf requires goofy pants and a fat ass",
                    "Alcohol equals puke equals smelly equals nobody likes you ",
                    "Alligators are ornery 'cause of their Medula Oblongata",
                    "@PopeyesChicken is fkn awesome!",
                    "what you lookin' at, swan?",
                    "My mama says alligators are ornery cause they got all them teeth and no toothbrush"
];

//function to choose random array 
function chooseRandom(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];  
}

//saving array as variable
var phrase = chooseRandom(handleArray) + ", " + 
chooseRandom(phraseArray);

//node-twitterbot's bot.tweet function
Bot.tweet(phrase);
