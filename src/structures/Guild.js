const { Guild } = discord = require('discord.js');

class TicketGuild {
    constructor(guild = Guild) {
        this.guild = guild;
        this.ownerId = guild.ownerId;
        this.id = guild.id;
    }

    reply(ticket, data) {
        const channel = ticket
    }
}