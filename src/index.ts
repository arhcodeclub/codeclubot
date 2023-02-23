import { Client, Events, Collection, GatewayIntentBits} from "discord.js"
import * as dotenv from "dotenv";
import * as fs from "node:fs";
import * as path from "node:path";
import { DiscordCommandModule } from "./commands/types";
import { appRoot } from "./root";

console.log(appRoot + "/.env");

dotenv.config({ path: appRoot + "/.env" });

const token = process.env.TOKEN!;

const client = new Client({ intents: [GatewayIntentBits.Guilds]});

const globalCommands = new Collection<String, DiscordCommandModule>();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith("js"));

async function putCommandsGlobal(): Promise<void>
{
    for (const file of commandFiles)
    {

        const filePath = path.join(commandsPath, file);
        const command = await import(filePath) as DiscordCommandModule;

        globalCommands.set(command.data.name, command);

    }
}

client.on(Events.InteractionCreate, async interaction => {

    if (!interaction.isCommand() || interaction.isChatInputCommand()) return;

    const command = globalCommands.get(interaction.commandName);

    if (!command) {
        console.log(`${command}: No such command`);
        
        return;
    }

    try {
        await command.execute(interaction);
    } catch (e) {
        console.log(e);

        await interaction.reply({ content: "There was an error running this command :(", ephemeral: true });
    }

});

client.once(Events.ClientReady, c => {
    console.log(`Logged in as ${c.user.tag}`);
});

putCommandsGlobal();

client.login(token);