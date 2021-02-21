/* eslint-disable no-unused-vars */
const Command = require('../../structures/Command');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Send a Normal DM message through BOT.',
			category: 'Admin',
			usage: '[command]'
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		await message.delete();
		const permEmbed = new MessageEmbed()
			.setTitle(`Nemáš povolenie používať tento príkaz!`)
			.setFooter(`Midecon™ - 2021`)
			.setColor('FF0000')
			.setTimestamp();
		const permsEmbed = new MessageEmbed()
			.setTitle(`Zadal si nesprávne MENO alebo ID!`)
			.setFooter(`Midecon™ - 2021`)
			.setColor('FF0000')
			.setTimestamp();
		const permaEmbed = new MessageEmbed()
			.setTitle(`Nezadal si správu!`)
			.setFooter(`Midecon™ - 2021`)
			.setColor('FF0000')
			.setTimestamp();
		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
		const doneEmbed = new MessageEmbed()
			.setTitle(`Správa bola odoslaná použivateľovi ${member.user.tag}!`)
			.setFooter(`Midecon™ - 2021`)
			.setColor('#BD00FF')
			.setTimestamp();
		if (!message.member.permissions.has('MANAGE_MESSAGES')) { return message.channel.send(permEmbed); }
		if (!member) return message.channel.send(permsEmbed);
		if (!args.slice(1).join(' ')) return message.channel.send(permaEmbed);
		return member.user.send(args.slice(1).join(' ')).then(() => message.channel.send(doneEmbed));
	}

};

