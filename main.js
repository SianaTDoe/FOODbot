const Discord = require('discord.js');
const client = new Discord.Client();
const prot = require('./prot');
const glucide = require('./glucide');
const legume = require('./legume');
const commande = require('./commande');

//ONLINE CODE ♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢

client.on("ready", function () {
    console.log("Mon BOT est connecté");
})

client.login("process.env.BOT_TOKEN")



//HELLO USER ♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢

client.on("message", message => {
    if (message.content === "*hello") {
        message.reply('hello')
    }
})


//RANDOM PROT ♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢

client.on("message", message => {
    if (message.content === "*prot") {
        message.channel.send(Viande())
    }
})


function Viande() {
    let rand = Math.floor(Math.random() * prot.length);
    return ("```" + prot[rand] + "```")

}


//RANDOM GLUCIDE ♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢

client.on("message", message => {
    if (message.content === "*glucide") {
        message.channel.send(Glucide())
    }
})


function Glucide() {
    let rand = Math.floor(Math.random() * glucide.length);
    return ("```" + glucide[rand] + "```")

}


//RANDOM LEGUMES ♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢

client.on("message", message => {
    if (message.content === "*legume") {
        message.channel.send(Legume())
    }
})


function Legume() {
    let rand = Math.floor(Math.random() * legume.length);
    return ("```" + legume[rand] + "```")

}


//RANDOM COMMANDE ♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢

client.on("message", message => {
    if (message.content === "*commande") {
        message.channel.send(Commande())
    }
})


function Commande() {
    let rand = Math.floor(Math.random() * commande.length);
    return ("```" + commande[rand] + "```")

}






// HELP COMMAND ♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢♢

client.on("message", message => {
    if (message.content === "*help") {
        message.channel.send(`**Liste des commandes :** & +
    __prot__ 
    __glucide__
    __legume__
    __commande__
     
     `)
    }
})