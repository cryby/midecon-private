const Command = require('../../structures/Command.js');
const { MessageEmbed } = require('discord.js');


module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Midecon™ - Server Info',
			category: 'Utilities'
		});
	}
	async run(message) {
		if (message.content.startsWith('-info')) {
			const waitembed = new MessageEmbed()
				.setTitle(`Midecon™ | Info`)
				.setThumbnail(this.client.user.displayAvatarURL(), { dynamic: true })
				.setColor('#BD00FF')
				.setFooter('Midecon™')
				.setTimestamp()
				.addField('Getting info...', '\u200b');
			const finalembed = new MessageEmbed()
				.setTitle(`Midecon™ | Info`)
				.setThumbnail(this.client.user.displayAvatarURL(), { dynamic: true })
				.setColor('#BD00FF')
				.setFooter('Midecon™')
				.setTimestamp()
				.addField('Web: Soon!', `\u200b`)
				.addField('Minecraft Server: Soon!', `\u200b`)
				.addField('TeamSpeak: Soon!', `\u200b`);
			const msg = await message.channel.send(waitembed);

			if (message.content.toLowerCase() === '-info') {
				await message.delete();
			}

			msg.edit(finalembed);
		}
	}

};
