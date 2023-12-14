const Discord  = require("discord.js")
const bot = new Discord.Client({intents: 3276799})
const config = require('./config')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Faire un facemath de citation (tournoi) || votez la meilleur citation, un 1vs1

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
    message.delete(); // suppression du message direct
    
    const embed = new Discord.EmbedBuilder()
      .setTitle("░▒▓█ CITATION du 15/12/2023 █▓▒░")
      .setDescription(`
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
╒═══════════════════════════════════════════════╕

**__Petit résumé__** : Entrez dans le monde de Balzano, le gourou du gaming, transformant chaque moment en un niveau à débloquer. Dumas, quant à elle, préfère dépenser son pognon de dingue en rosé et en pinard ; la pauvre, elle est en manque. Et, qui l'aurait cru ? Elle se demande si elle aurait pu être une salope. Un dilemme existentiel en soi. Greg, nostalgique, se rappelle d'une époque où sa machine ne couinait pas... mmhhh bizarre... Ensuite, il y a Mr. Guichard, s'astiquant bruyamment, nous prévient que même si le pénis le fascine, il faut garder une éthique de technicien intacte. Pendant ce temps, sa fille est une écrivaine de sa propre réalité (ouf, ça fait mal ça...). Provost, le pingouin déjanté, balance des pommes par la fenêtre de l'informatique (coup dur pour Apple), tandis que Sagnard, confronté à l'ennui et à sa vexance, déclare que quelque chose pue... mmhh, Enzo ou Zack, d'après vous ? Vivet, le grand chef de l'autonomie, transforme ses disciples en pousses cassettes avec des conseils aussi pratiques que d'utiliser deux mains. Cependant, la plupart du temps, il semble plus occupé à déclarer son amour pour son pote GPT-4, qu'il arrose généreusement de 25€ par mois, tout en dénonçant la télévision comme de la propagande. C'est le genre de guide qui vous enseignerait l'art du saut à la corde avec un câble d'alimentation, vous voyez le bordel ? Ensuite, Wallon, philosophe du sprint intellectuel, affirme que plus on est con, plus on est rapide, tout en lançant des taquineries à chaque petit humain qu'il croise.

╘═══════════════════════════════════════════════╛
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰


￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
**Balzano :**

« On va dire que c'est un truc de gaming... »

**Dumas :**

« Vous croyez qu'on va au bistro ?! »
« Le pognon de dingue »
« Je préfère prendre mon petit rosé »
« Vous m'avez coupé la chique »
« C'est les professionnels un peu margoulin »
« Je suis en manque (pinard) »
« J'aurais pu être une salope »

**Greg :**

« A l'époque il couinait pas »

**Mr.GUICHARD :**

« Faite pas attention si vous m'entendez m'astiquer »
« Ne cracker pas les logiciels, c'est votre éthique de technicien qui est entre jeu »
« Chaque année y'en a un (qui se connecte root, qui me dit que ça ne marche pas blablabla) »
« C'est quoi ce machin de pénis »
« Alors monsieur pénis ? »
« Le pénis te fascine »

**Mme. Guichard :**

« Je suis écrivaine »

**Provost :**

« Je suis un pingouin qui balance la pomme par la fenêtre »

**Sagnard :**

« Ça vous embête de ne pas avoir un cours intéressant ? »
« Rooohhh sa pue sa »

**Vivet :**

« Vous serez des pousses cassettes »
« Mon objectif c'est que vous soyez autonome »
« Laisse-le se débrouiller, tu ne l'aides pas en faisant ça »
« On n'est d'accord ? »
« Utilise tes 2 mains, ça ira plus vite »
« N'hésitez pas à me solliciter »
« Chhhhhuuuuuuttttttttt »
« Ferme-la et réouvre car, j'en sais rien en fait »
« La télé c'est de la propagande »

**Wallon :**

« Plus on est con, plus on est rapide »
« Petite humain que tu es »

￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
**__BONUS :__** 

« Astronimique macroniste, ça part en extrême droite » - Dimitri

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
