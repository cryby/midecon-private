const Command = require('../../structures/Command');
const Discord = require('discord.js');
// eslint-disable-next-line no-unused-vars
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Send a Custom DM message through BOT.',
			category: 'Admin',
			usage: '[command]'
		});
	}
	// eslint-disable-next-line consistent-return
	async run(message, args) {
		await message.delete();
		const permEmbed = new Discord.MessageEmbed()
			.setTitle(`Nemáš povolenie používať tento príkaz!`)
			.setFooter(`Midecon™ - 2021`)
			.setColor('FF0000')
			.setTimestamp();
		const permsEmbed = new Discord.MessageEmbed()
			.setTitle(`Zadal si nesprávne MENO alebo ID!`)
			.setFooter(`Midecon™ - 2021`)
			.setColor('FF0000')
			.setTimestamp();
		const permaEmbed = new Discord.MessageEmbed()
			.setTitle(`Nezadal si správu!`)
			.setFooter(`Midecon™ - 2021`)
			.setColor('FF0000')
			.setTimestamp();
		const member =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]);
		const doneEmbed = new Discord.MessageEmbed()
			.setTitle(`Správa bola odoslaná použivateľovi ${member.user.tag}!`)
			.setFooter(`Midecon™ - 2021`)
			.setColor('#BD00FF')
			.setTimestamp();
			// eslint-disable-next-line no-sequences
		if (!message.member.permissions.has('MANAGE_MESSAGES')) { return message.channel.send(permEmbed), message.delete(500); }
		if (!member) return message.channel.send(permsEmbed);
		if (!args.slice(1).join(' ')) return message.channel.send(permaEmbed);
		return member.user
			.send(
				new Discord.MessageEmbed()
					.setAuthor(`${message.author.tag}`, message.author.avatarURL())
					.setTitle(`[+] Message from Midecon™ [+]`)
					.addFields({
						name: args.slice(1).join(' '), value: `\u200b`
					})
					.setFooter('From Midecon™')
					.setColor('#BD00FF')
					.setTimestamp()
			)
			.then(() => message.channel.send(doneEmbed));
	}

};
