import { CommandInteraction, SlashCommandBuilder } from "discord.js";

// All commands should have this interface

export interface DiscordCommandModule
{
    data: SlashCommandBuilder;
    execute: (interaction: CommandInteraction) => void;
}