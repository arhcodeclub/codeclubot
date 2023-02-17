const { SlashCommandBuilder } = require('discord.js');
const { exec } = require("child_process");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('start-teamviewer')
		.setDescription('Starts teamviewer if it isn not open already.'),
	async execute(interaction) {

        const reply = await new Promise((resolve, reject)=>{

            exec("teamviewer", (error, stdout, stderr)=>{

                if (error)
                {
                    reject(`Failed: ${error.message}`);
                }

                if (stderr)
                {
                    reject(`Failed: ${stderr}`);
                }

                resolve("Success!");

            });
        });

        console.log(reply);

		await interaction.reply(reply);
        
    }
};  