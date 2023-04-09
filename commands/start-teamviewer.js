const { SlashCommandBuilder } = require('discord.js');
const { fork, exec } = require('child_process');
const fs = require('fs');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('start-teamviewer')
    .setDescription('Starts teamviewer if it isn not open already.'),
  async execute(interaction) {
    const prc = exec(`screen -dm teamviewer -X "teamviewer"`);

    await interaction.reply('Did thayut');
  },
};
