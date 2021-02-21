const MenuDocsClient = require('./structures/MenuDocsClient');
const config = require('../config.json');

const client = new MenuDocsClient(config);
client.start();

client.on('ready', () => {
	client.user.setActivity('on dsc.gg/midecon', {
		type: 'STREAMING',
		url: 'https://www.twitch.tv/midecon'
	});
});
client.on('messageReactionAdd', async (reaction, user) => {
	if (reaction.message.partial) await reaction.message.fetch();
	if (reaction.partial) await reaction.fetch();

	if (user.bot) return;
	if (!reaction.message.guild) return;

	if (reaction.message.channel.id === '798879841486372880') {
		if (reaction.emoji.name === '✅') {
			await reaction.message.guild.members.cache.get(user.id).roles.add('813075720791916545');
		}
	}
}
);
client.on('messageReactionAdd', async (reaction, user) => {
	if (reaction.message.partial) await reaction.message.fetch();
	if (reaction.partial) await reaction.fetch();

	if (user.bot) return;
	if (!reaction.message.guild) return;

	if (reaction.message.channel.id === '813066487266803782') {
		if (reaction.emoji.name === '✅') {
			await reaction.message.guild.members.cache.get(user.id).roles.add('813077692102082641').reaction.remove;
		}
	}
}
);
