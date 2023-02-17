const { SlashCommandBuilder, InteractionResponse, InteractionResponseType } = require('discord.js');
const { SerialPort } = require("serialport");

const serialPort = new SerialPort({path: "/dev/ttyACM3", baudRate: 115200});

module.exports = {
    data: new SlashCommandBuilder()
        .setName('toggle-light')
        .setDescription("Doesn't toggle the light, didn't expect that did ya?")
        .addIntegerOption(option => 
            option.setName("color")
            .setDescription("Light color")
            .setMaxValue(10)
            .setMinValue(1)
            .setRequired(true)),
    async execute(interaction) {
        const input = interaction.options.getInteger("color");

        serialPort.write(`${input}`);

        await interaction.reply('Did thayut 👍');
    },
};
