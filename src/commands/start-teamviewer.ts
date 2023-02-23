import { CommandInteraction, SlashCommandBuilder } from "discord.js";
const fs = require("fs");
import { exec } from "child_process"

module.exports = {
	data: new SlashCommandBuilder()
		.setName('start-teamviewer')
		.setDescription('Starts teamviewer if it isn not open already.'),
	async execute(interaction: CommandInteraction) {

        const prc = exec(`screen -dm teamviewer -X "teamviewer"`);

		await interaction.reply({ 
            content: "Did thayut",
            ephemeral: true,  
        });
        
    }
};