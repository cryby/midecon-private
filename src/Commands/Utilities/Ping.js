const Command = require('../../structures/Command.js');


module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			category: 'Utilities'
		});
	}
	async run(message) {
		if (message.content.startsWith('-ping')) {
			const msg = await message.channel.send('Pinging...');

			const latency = msg.createdTimestamp - message.createdTimestamp;

			if (message.content.toLowerCase() === '-ping') {
				await message.delete();
			}

			msg.edit(`Bot Latency \`${latency}ms\`, API Latency: \`${Math.round(this.client.ws.ping)}ms\``);
		}
		if (message.content.startsWith('-pong')) {
			const msg = await message.channel.send('Pinging...');

			const latency = msg.createdTimestamp - message.createdTimestamp;

			if (message.content.toLowerCase() === '-pong') {
				await message.delete();
			}

			msg.edit(`Bot Latency \`${latency}ms\`, API Latency: \`${Math.round(this.client.ws.ping)}ms\``);
		}
	}

};
