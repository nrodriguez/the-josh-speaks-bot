const Discord = require('discord.io');
const quotes = require('./quotes.json');

let token;

try{
    token = require('./auth.json').token;
} catch (err) {
    token = process.env.token;
}

// Initialize Discord Bot
const bot = new Discord.Client({
    token,
    autorun: true
});

bot.on('ready', function(event) {
    const randomQuote = quotes.elements[Math.floor(Math.random()*quotes.elements.length)];

    bot.sendMessage({
        to: quotes.channelID,
        message: `** Heya Playa - Today's daily dose of The Josh Speaks motivation is: **\n\n*${randomQuote.quote}*\n\n ${randomQuote.videoUrl}`
    });

});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === 'ping') {
        bot.sendMessage({
            to: channelID,
            message: 'pong'
        });
    }
});