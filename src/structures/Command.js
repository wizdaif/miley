const { Guild, Message, MessageEmbed } = discord = require('discord.js');

class Command {
    constructor(name, options = {}, client) {
        const {
            aliases = [],
            ownerOnly = false,
            cooldown = null,
            description = '',
            category = '',
            clientPermissions = this.clientPermissions || [],
            userPermissions = this.userPermissions || [],
            ignoreCooldown,
            ignorePermissions
        } = options;

        /**
         * The client
         */

        this.client = client;

        /**
         * The name of the command
         */

        this.name = name;

        /**
         * The command category
         */

        this.category = category;

        /**
         * The command aliases
         */

        this.aliases = aliases;

        /**
         * Sets if the command can be used by only the owner
         */

        this.ownerOnly = ownerOnly;

        /**
         * The command cooldown
         */

        this.cooldown = cooldown;

        /**
         * The command description
         */
    
        this.description = description;

        /**
         * The required permissions for the bot to run the command
         */
    
        this.clientPermissions = clientPermissions;

        /**
         * Thew required permissions for users to use this command
         */
    
        this.userPermissions = userPermissions;

        /**
         * Ignroes the set cooldown for the command
         */
    
        this.ignoreCooldown = ignoreCooldown;

        /**
         * Ignores the set permissions for the command
         */
    
        this.ignorePermissions = ignorePermissions;
    }

    /**
     * 
     * @param {CallableFunction} fn 
     * @param {Number} time 
     * @returns Timeout
     */
    timeout(fn, time) {
        return setTimeout(fn, time);
    }

    /**
     * 
     * @param {CallableFunction} fn 
     * @param {Number} time 
     * @returns Interval
     */
    interval(fn, time) {
        return setInterval(fn, time)
    }

    exec(message, args) {

    }

    /**
     * 
     * @param {Object} options 
     * @param {Object} options.title the title of the embed, OPTIONAL
     * @param {Object} options.description the description of the embed, OPTIONAL
     * @param {Object} options.fields the fields of the embed, OPTIONAL
     * @param {Object} options.color the color of the embed, OPTIONAL
     * @param {Object} options.footer the footer of the embed, OPTIONAL
     * @param {Object} options.channel The Channel or User to send the embed to, OPTIONAL
     * @returns MessageEmbed
     */
     async embed({ 
        title, 
        description,
        url,
        timestamp,
        color, 
        fields, 
        author,
        thumbnail,
        image,
        footer,
        channel 
    } = options = { 
        title, 
        description,
        url,
        timestamp,
        color, 
        fields, 
        author,
        thumbnail,
        image,
        footer,
        channel 
    }) {
        const embed = new MessageEmbed({
            title: title || 'No Title',
            description: description || null,
            url: url || null,
            timestamp: timestamp || new Date(),
            color: color || '#2F3136',
            fields: fields || null,
            author: author || null,
            thumbnail: thumbnail || null,
            image: image || null,
            footer: footer || 'Miley'
        });

        if (channel) channel.send({
            embeds: [embed]
        });

        return embed;
    }
}

module.exports = 
    Command
