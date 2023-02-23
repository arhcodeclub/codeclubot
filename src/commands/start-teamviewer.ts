import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { exec } from "child_process";
import { DiscordCommandModule } from "./types";

export const command: DiscordCommandModule = {
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