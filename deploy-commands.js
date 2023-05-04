const { REST, Routes } = require('discord.js');
const fs = require('node:fs');

const nconf = require("nconf");

async function run() {

    const guildId = nconf.get("GUILDID");
    const clientId = nconf.get("CLIENTID");
    const token = nconf.get("TOKEN");

    const commands = [];
    // Grab all the command files from the commands directory you created earlier
    const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'));
    
    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        commands.push(command.data.toJSON());
    }
    
    // Construct and prepare an instance of the REST module
    const rest = new REST().setToken(token);
    

    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        // const data = await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });

        const data = await rest.put(
        	Routes.applicationCommands(clientId),
        	{ body: commands },
        );

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }

}

module.exports = { run };