const { MessageEmbed } = require('discord.js');
const Command = require('../../structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['halp'],
			description: 'Displays all the commands in the bot',
			category: 'General',
			usage: '[command]'
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, [command]) {
		if (message.content.toLowerCase() === '-help') {
			await message.delete();
		}
		if (message.content.toLowerCase() === '-halp') {
			await message.delete();
		}
		if (message.content.startsWith('-help' || '-halp')) {
			const embed = new MessageEmbed()
				.setColor('#BD00FF')
				.setAuthor(`Midecon™ | Help`, message.guild.iconURL({ dynamic: true }))
				.setThumbnail(this.client.user.displayAvatarURL())
				.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
				.setTimestamp();

			if (command) {
				const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command));

				if (!cmd) return message.channel.send(`Invalid Command named. \`${command}\``);

				embed.setAuthor(`${this.client.utils.capitalise(cmd.name)} Command Help`, this.client.user.displayAvatarURL());
				embed.setDescription([
					`**❯ Aliases:** ${cmd.aliases.length ? cmd.aliases.map(alias => `\`${alias}\``).join(' ') : 'No Aliases'}`,
					`**❯ Description:** ${cmd.description}`,
					`**❯ Category:** ${cmd.category}`,
					`**❯ Usage:** ${cmd.usage}`
				]);

				return message.channel.send(embed);
			} else {
				embed.setDescription([
					``
				]);
				let categories;
				if (!this.client.owners.includes(message.author.id)) {
					categories = this.client.utils.removeDuplicates(this.client.commands.filter(cmd => cmd.category !== 'Owner').map(cmd => cmd.category));
				} else {
					categories = this.client.utils.removeDuplicates(this.client.commands.map(cmd => cmd.category));
				}

				for (const category of categories) {
					embed.addField(`**${this.client.utils.capitalise(category)}**`, this.client.commands.filter(cmd =>
						cmd.category === category).map(cmd => `\`${cmd.name}\``).join(' '));
				}
				return message.channel.send(embed);
			}
		}
		if (message.content.startsWith('-halp')) {
			const embed = new MessageEmbed()
				.setColor('#BD00FF')
				.setAuthor(`${message.guild.name} Help Menu`, message.guild.iconURL({ dynamic: true }))
				.setThumbnail(this.client.user.displayAvatarURL())
				.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
				.setTimestamp();

			if (command) {
				const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command));

				if (!cmd) return message.channel.send(`Invalid Command named. \`${command}\``);

				embed.setAuthor(`Midecon™ | Command Help`, this.client.user.displayAvatarURL());
				embed.setDescription([
					`**❯ Aliases:** ${cmd.aliases.length ? cmd.aliases.map(alias => `\`${alias}\``).join(' ') : 'No Aliases'}`,
					`**❯ Description:** ${cmd.description}`,
					`**❯ Category:** ${cmd.category}`,
					`**❯ Usage:** ${cmd.usage}`
				]);

				return message.channel.send(embed);
			} else {
				embed.setDescription([
					``
				]);
				let categories;
				if (!this.client.owners.includes(message.author.id)) {
					categories = this.client.utils.removeDuplicates(this.client.commands.filter(cmd => cmd.category !== 'Owner').map(cmd => cmd.category));
				} else {
					categories = this.client.utils.removeDuplicates(this.client.commands.map(cmd => cmd.category));
				}

				for (const category of categories) {
					embed.addField(`**${this.client.utils.capitalise(category)}**`, this.client.commands.filter(cmd =>
						cmd.category === category).map(cmd => `\`${cmd.name}\``).join(' '));
				}
				return message.channel.send(embed);
			}
		}
	}

};
