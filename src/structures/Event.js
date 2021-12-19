const {
    Client
} = require('discord.js');

module.exports = class Event {
    constructor(options = { name, disabled }, client = Client) {
        this.eventList = ["apiResponse", "apiRequest", "applicationCommandCreate", "applicationCommandDelete", "applicationCommandUpdate", "channelCreate", "channelDelete", "channelPinsUpdate", "channelUpdate", "debug", "warn", "emojiCreate", "emojiDelete", "emojiUpdate", "error", "guildBanAdd", "guildBanRemove", "guildCreate", "guildDelete", "guildUnavailable", "guildIntegrationsUpdate", "guildMemberAdd", "guildMemberAvailable", "guildMemberRemove", "guildMembersChunk", "guildMemberUpdate", "guildUpdate", "inviteCreate", "inviteDelete", "message", "messageCreate", "messageDelete", "messageReactionRemoveAll", "messageReactionRemoveEmoji", "messageDeleteBulk", "messageReactionAdd", "messageReactionRemove", "messageUpdate", "presenceUpdate", "rateLimit", "invalidRequestWarning", "ready", "invalidated", "roleCreate", "roleDelete", "roleUpdate", "threadCreate", "threadDelete", "threadListSync", "threadMemberUpdate", "threadMembersUpdate", "threadUpdate", "typingStart", "userUpdate", "voiceStateUpdate", "webhookUpdate", "interaction", "interactionCreate", "shardDisconnect", "shardError", "shardReady", "shardReconnecting", "shardResume", "stageInstanceCreate", "stageInstanceUpdate", "stageInstanceDelete", "stickerCreate", "stickerDelete", "stickerUpdate"]

        this.name = options.name;
        this.disabled = options.disabled

        if (!this.eventList.includes(this.opts.name) && this.opts.custom == false) {
            throw new Error('Events List does not include: ' + this.options.name)
        }
    }

    setEvent(opt, client) {
        return client.events.set(opt.name, { disabled: opt.disabled })
    }
}