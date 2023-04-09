const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('log-message')
        .addStringOption((option) => 
            option.setRequired(true)
            .setName('log-message-content')
            .setDescription('Message to log to console')
        )
		.setDescription('Logs message to discord bot console'),
	async execute(interaction) {

        console.log(interaction.options.get('log-message-content').value);

		await interaction.reply("Did thayut");
        
    }
};