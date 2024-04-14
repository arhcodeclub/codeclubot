const { SlashCommandBuilder } = require('discord.js');
const fetch = require("fetch");
const nconf = require("nconf");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('showlatestimage')
        .setDescription('Shows last image taken by picamera [OUTDATED}'),
    async execute(interaction) {

        // TODO get image from url endpoint

    },
};
