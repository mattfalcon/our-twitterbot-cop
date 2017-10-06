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
    "@drake",
    "@lilyachty",
    "@davecoulier",
    "@gavindawson",
    "@macengelprof",
    "@johnstamos",
    "@ochocinco",
    "@STOP_PRE",
    "@trvisXX",
    "@tilmanJfertitta",
    "@BenRogers",
    "@danrafaelespn",
    "@SandlerJ",
    "@TommySledge",
    "@arisports",
    "@justinbieber",
    "@seantpendergast",
    "chipbrownOB",
    "@jeremybieber",
    "@Kingnickrusso",
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
                    "If you don't like spaghetti and meatballs, why don't you get the hell out",
                    "So two guys you were best friends with in law school fell in love with each other?",
                    "This is bullshit! Should have same rules for everyone, no matter what age!",
                    "You're My Closest Friend, And I don't even Like you",
                    "Only you and my grandfather go every thirty seconds.",
                    "@joshinnesshow eats poo",
                    "are you going to go to your Hooters reunion? And talk about who's ass sticks out the most while wearing your shorts?",
                    "Koufax is a good egg, he was nice to that kid. But he fights like a girl.",
                    "I can't believe it... Bruce Willis is a ghost!",
                    "Is @JLin7 the next Jordan? #NBA #Nets",
                    "I got wicked bad frost bite when I was in the scouts",
                    "You're wrong Colonel Sanders",
                    "when did Ben Franklin invent electricity?",
                    "You don't have what they call the social skills",
                    "you said it was going to be a touchdown pass, you crazy asshole",
                    "mama say that happiness is from magic rays of sunshine that come down when you feelin blue",
                    "that's why you never have any friends, 'cept fo yo mama",
                    "deh ever catch dat gorilla that busted outa zoo and punched you in da eye?",
                    "gatorade not only quenches your thirst better, it tastes better too, idiot",
                    "How did I get into these pajamas?",
                    "#dogpants go on 4legs",
                    "Why don't I just go eat some hay, make things out of clay, lay by the bay?",
                    "It's all in the hips. It's all in the hips. It's all in the hips",
                    "He got me, but I tore one of the bastard's eyes out though",
                    "You ain't cool unless you pee your pants",
                    "Why don't you just go home, are you too good for your home?",
                    "I don't know how to fight, I'm a comedian!",
                    "You are the worst wedding singer in the world buddy",
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
