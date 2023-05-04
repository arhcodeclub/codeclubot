const { SlashCommandBuilder } = require('discord.js');
const fs = require("node:fs");
const path = require("path");

const 
    imagedir = path.join(__dirname, "/image"),
    latestImageName = "latest.png";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('showlatestimage')
        .setDescription('Shows last image taken by picamera'),
    async execute(interaction) {

        const files = await fs.readdirSync(imagedir);

        if (!files.includes(latestImageName)) {
            // interaction.channel.send(`${latestImageName} does not exist`);
            interaction.reply({
                content: `No image present`,
                ephemeral: true
            });

            return;
        }

        const response = await interaction.reply({
            ephemeral: true,
            content: "latest image",
            files: [{ attachment: (path.join(imagedir, latestImageName)) }],
        });

    },
};
