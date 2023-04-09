const { SlashCommandBuilder } = require('discord.js');
const { fork, exec } = require("child_process");
const fs = require("fs");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('log-command')
		.setDescription('Logs command to discord bot console.'),
	async execute(interaction) {

		console.log(interaction);

		await interaction.reply("Did thayut");
    	}
};
