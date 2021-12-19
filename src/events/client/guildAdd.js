const Event = require('../../structures/Event.js');

const {
    MessageEmbed
} = require('discord.js');

module.exports = class ReadyEvent extends Event {
    constructor(client) {
        super.setEvent({
            name: "guildCreate"
        }, client);
    }

    async exec(guild) {
        
    }
}