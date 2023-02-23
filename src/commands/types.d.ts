import { Interaction, SlashCommandBuilder } from "discord.js";

export interface DiscordCommandModule
{
    data: SlashCommandBuilder;
    execute: (interaction: Interaction) => void;
}