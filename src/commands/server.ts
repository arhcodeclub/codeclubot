import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { DiscordCommandModule } from "./types";

export const command: DiscordCommandModule = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction: CommandInteraction): Promise<void> {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply({ 
            content: `This server is ${interaction.guild?.name} and has ${interaction.guild?.memberCount} members.`, 
            ephemeral: true
        });
	},
};
