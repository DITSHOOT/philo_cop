const Discord  = require("discord.js")
const bot = new Discord.Client({intents: 3276799})
const config = require('./config')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

bot.login(process.env.TOKEN)


app.listen(PORT, () => {
  console.log(`Le bot est en cours de lancement sur le port ${PORT}`);
});


let status = [
  {
    name: 'les bruits de la nature',
    type: Discord.ActivityType.Listening,
  },
  {
    name: 'les interactions humaines',
    type: Discord.ActivityType.Watching,
  },
  {
    name: 'Spiritualité Babouines',
    type: Discord.ActivityType.Competing,
  },

  
]


bot.on('ready', () => {
  const channel = bot.channels.cache.get('1163902591768477776');
  if (!channel) return console.error('Le salon spécifié est introuvable.');
  channel.send('Le bot est maintenant connecté ! <@510818650307952640>');
    console.log(`Connecté en tant que ${bot.user.tag}`);



  setInterval(() =>{
    let random = Math.floor(Math.random() * status.length);
    bot.user.setActivity(status[random]);
  },3600000);
});


bot.on('messageCreate', async (message) => {
  if (message.content.startsWith(config.prefix + 'annonce')) {
    message.delete();
    
    const embed = new Discord.EmbedBuilder()
      .setTitle("░▒▓█ CITATION du 16/11/2023 █▓▒░")
      .setDescription(`
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
╒═══════════════════════════════════════════════╕

**__Petit résumé__** : Suivez Vivet dans un monde où pousser est essentiel, Dumas part à la quête de picole, Gregory jongle avec le Quoicoubeh, et Vincent révèle la Loi de Godwin. Balzano, le maître de la moquerie, assure que l'informatique se porte bien, pendant que Vivet, le GOAT, dicte à Valentin de se redresser et condamne Jordan à errer dans le couloir. Même les fossiles, comme Valentin, ne sont pas à l'abri de disparités et de questions existentielles sur les doigts de la main, comme le souligne Balzano et Wallon.

╘═══════════════════════════════════════════════╛
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰


￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
« N'oubliez pas de pousser » - Vivet 
« Tu lui rends pas service » - Vivet
« Fermez vos postes sinon j'ai pas votre attention à 100% » - Vivet
« Je ne comprends pas ta question » - Vivet 
« Tiens toi droit ! En entreprise tu te tiens pas comme ça. » - Vivet 
« Va mourir dans le couloir » - Vivet 
« Désolé mais tu as tort » - Vivet ||(Valentin à propos d'Apple, circa Octobre 2023)||
« qu'il est moqueur » - Balzano
« il y a de forte disparité » - Balzano
« L'informatique se porte bien ? » - Balzano
« qui me cite les 5 doigts de la main » - Wallon
« Ça, ça passera pas ça par contre » - Wallon
« Quoicoubeh » - Wallon
« Je vais chercher de la picole, je reviens » - Dumas 
« Licence IV » - Dumas 
« On a un fossile dans la classe » - Guichard 
« Loi de Godwin » - Sagnard

￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
**__BONUS :__** 
« Si il arrive une cacahuète » - Zakou
« à mon époque » - Jordande 
`)
      .setColor("#6d5050")
      .setAuthor({
        name: `${bot.user.username}`,
        iconURL: `${bot.user.displayAvatarURL()}`
    })
      .setFooter({
        text: `${message.guild.name} - ${new Date().toLocaleString()}`,
        iconURL: message.guild.iconURL({ dynamic: true, format: 'png', size: 1024 })
      });

    await message.channel.send({ embeds: [embed] });
    message.channel.send('@everyone');
  }
});




bot.on('messageCreate', (message) => {
  if (message.author.bot) return; // Ne répondez pas aux messages des bots
  if (!message.content.startsWith(config.prefix)) return; // Vérifiez s'il commence par le préfixe

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'say') {
    // Vérifiez si l'utilisateur est un administrateur
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.reply('Seuls les administrateurs sont autorisés à utiliser cette commande.');
    } 

    // Récupère le message de l'utilisateur, en excluant le préfixe
    const userMessage = args.join(' ');
    if (!userMessage) {
      return message.channel.send('Veuillez écrire un message.');
    }

    // Supprime la commande de l'utilisateur
    message.delete();
  
    // Envoie le message personnalisé de l'utilisateur
    message.channel.send(userMessage);
  }
});


bot.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    const embed = new Discord.EmbedBuilder()
      .setTitle('Ping')
      .setDescription('Pong!')
      .setColor('#0099ff');

    message.channel.send({ embeds: [embed] });
  }

    
});
