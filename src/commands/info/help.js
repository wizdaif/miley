const Command = require('../../structures/Command');

class HelpCommand extends Command {
    constructor(client) {
        super('help', {
            aliases: ['info'],
            category: 'info',
            description: 'Displays help!'
        }, client);
    }
    exec(message, args) {
        message.channel.send('ok');
    }
}