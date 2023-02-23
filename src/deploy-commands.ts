import { REST, Routes } from "discord.js";
import * as dotenv from "dotenv";
import * as fs from "fs";
import { appRoot } from "./root";

dotenv.config({ path: appRoot + "/.env" });

const guildId = process.env.GUILDID!;
const clientId = process.env.CLIENTID!;
const token = process.env.TOKEN!;

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(token);

const commands: Array<String> = [];
const commandFiles = fs.readdirSync(__dirname + '/commands').filter(file => file.endsWith('.js'));

async function parseCommands(): Promise<void> {

    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
    for (const file of commandFiles) {

        const command = await import(`${__dirname}/commands/${file}`);
        commands.push(command.data.toJSON());

    }

}

async function main(): Promise<void> {
    await parseCommands();

    console.log(commands);

    try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

        const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

        // const data = await rest.put(
		// 	Routes.applicationCommands(clientId),
		// 	{ body: commands },
		// );

		console.log(`Successfully reloaded ${commands.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
}

main();