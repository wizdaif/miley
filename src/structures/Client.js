const {
    MessageEmbed,
    Collection
} = require('discord.js'),
    fs = require('fs')

class Client extends require('discord.js').Client {
    constructor(options) {
        super({
            intents: [32667], 
            partials: ["CHANNEL"]
        });

        this["#"] = {
            options
        };

        this.events = new Collection();
        this.cooldowns = new Collection();
        this.commands = new Collection();
        this.aliases = new Collection();

        this.config = this["#"].options.config

        this.devs = this.config?.botDevs
    }

    async start() {
        this.login(this.config.token);

        require('./handlers/event')(this);
        require('./handlers/command')(this);
    }

    async getUrls(client, attachments) {
        return attachments.map((attachment) => (attachment));
    }
}

module.exports = Client;
