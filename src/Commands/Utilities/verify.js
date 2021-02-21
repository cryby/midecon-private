/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const Command = require('../../structures/Command.js');
const Discord = require('discord.js');

// eslint-disable-next-line no-unused-vars
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });


module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			category: 'Utilities'
		});
	}
	async run(message) {
		await message.delete();
		const embed = new Discord.MessageEmbed()
			.setTitle(`Midecon™ | Verification`)
			.setDescription('Klikněte na emoji pro ověření!')
			.setThumbnail(this.client.user.displayAvatarURL(), { dynamic: true })
			.setColor('#BD00FF');
		const msgEmbed = await message.channel.send(embed);
		// eslint-disable-next-line no-useless-escape
		msgEmbed.react("✅");
	}

};

