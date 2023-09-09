module.exports = {
    name: 'messageCreate',
    execute(message) {
        if (message.author.bot) return;
        if (!message.content.startsWith(process.env.prefix)) return;

        const args = message.content.slice(process.env.prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = message.client.commands.get(commandName);

        if (!command) return;

        try {
            command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    },
}