const Event = require('../../structures/Event');
const MenuDocsEmbed = require('../../structures/MenuDocsEmbed');

module.exports = class extends Event {

	async run(message) {
		if (message.content.startsWith('-')) return;
		if (!message.guild || message.author.bot) return;
		const attachments = message.attachments.size ? message.attachments.map(attachment => attachment.proxyURL) : null;
		const embed = new MenuDocsEmbed()
			.setColor('BLUE')
			.setAuthor(message.author.tag, this.client.user.displayAvatarURL({ dynamic: true }))
			.setTitle('Message Deleted')
			.setDescription([
				`**❯ Message ID:** ${message.id}`,
				`**❯ Channel:** ${message.channel}`,
				`**❯ Author:** ${message.member.displayName}`,
				`${attachments ? `**❯ Attachments:** ${attachments.join('\n')}` : ''}`
			]);
		if (message.content.length) {
			embed.splitFields(`**❯ Deleted Message:** ${message.content}`);
		}

		const channel = message.guild.channels.cache.find(ch => ch.name === 'logs');
		if (channel) channel.send(embed);
	}

};
