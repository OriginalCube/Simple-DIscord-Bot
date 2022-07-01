require('dotenv').config();
var tempData = require('./data.json');
const {Client, Intents, MessageEmbed} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); 

client.on('ready' , () => {
	console.log('it Loaded'); //Checks if the discord bot runs properly
});

client.on('message', (message) =>{
	const tempString = message.content;
	if(tempString[0] !== '*'){
		return;//Returns if there are errors in the code	
	}else{//Enter here when keyword is used
		const command = tempString.split(' '); //Splits the Recieved data
	  let mainData = " ";
		let option = " ";
		if(command[0] === '*send'){
			//set Data before Embed
			if(command[1] === 'author'){
				let rand = Math.floor(Math.random() * tempData.author.length + 1);
				mainData = tempData.author[rand];
				option = "Author";
			}else if(command[1] === 'codes'){
				let rand = Math.floor(Math.random() * tempData.codes.length + 1);
				mainData = tempData.codes[rand];
				option = "Codes";
			}
			const embed = new MessageEmbed()
				.setColor('#0099ff')
				.setTitle(option)
				.setDescription(mainData)
				.setImage('https://i.imgur.com/douh7U1.gif')
			message.author.send({embeds: [embed]})	
		}	//'https://i.imgur.com/douh7U1.gif'
	}
});

client.login(process.env.DISCORD_BOT_TOKEN);
