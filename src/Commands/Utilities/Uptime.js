const Command = require('../../structures/Command.js');
const ms = require('ms');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			category: 'Utilities'
		});
	}

	async run(message) {
		if (message.content.startsWith('-uptime')) {
			message.channel.send(`\`Uptime: ${ms(this.client.uptime, { long: true })}\``);
		}
	}

};
