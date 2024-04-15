// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection, IntentsBitField, GatewayVersion, Message } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const dotenv = require('dotenv').config();

let token;
// Create a new client instance
let client;

// async function commandError(interaction) {
//     if (interaction.replied) return;

//     const response = await interaction.reply({
//         content: 'There was an error while executing this command!',
//         ephemeral: true,
//     });
// }

function run() {

    token = process.env.TOKEN;

    client = new Client({ intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages
    ] });
    client.commands = new Collection();

    // // load commands
    // let commandsPath = path.join(__dirname, 'commands');
    // let commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

    // for (const file of commandFiles) {
    //     const filePath = path.join(commandsPath, file);
    //     const command = require(filePath);
    //     // Set a new item in the Collection with the key as the command name and the value as the exported module
    //     if ('data' in command && 'execute' in command) {
    //         client.commands.set(command.data.name, command);
    //     } else {
    //         console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    //     }
    // }


    client.on(Events.InteractionCreate, async (interaction) => {
        // if (!interaction.isChatInputCommand()) return;
    
        // const command = interaction.client.commands.get(interaction.commandName);
    
        // if (!command) {
        //     console.error(`No command matching ${interaction.commandName} was found.`);
            
        //     commandError(interaction);
    
        //     return;
        // }
    
        // try {
        //     await command.execute(interaction);
        // } catch (error) {
        //     console.error(error);
            
        //     commandError(interaction);
        // }
        console.log(interaction);
    });

    const cStrings = [
        "*'Dit ga je nooit zien 0_0'*\n\t-Jan de C God",
        "*'Voor elke C programmeur zijn er 3.2 javascript programmeurs, feel old yet?'*\n\t-Jan de C God",
        "*'Wanneer je C voor de tweede keer gebruikt weet je al dat je op het foute pad zit'*\n\t-Jan de C God",
        "*'3 keer C is schip gezonken'*\n\t-Jan de C God",
        "*'Lekker met zn vieren C afleren'*\n\t-Jan de C God",
        "*'De onderkant van 5 lijkt wel een beetje op de C als je er over nadenkt, en je hoofd omdraait, maar misschien is het dan de bovenkant. Dat zijn de soort dingen waar ik soms midden in de nacht wakker van wordt'*\n\t-Jan de C God",
        "*'6 is 9 omgekeerd, maar C omgekeerd is gewoon een omgekeerde C'*\n\t-Jan de C God",
        "*'7 is een geluksgetal, weet je wie er trouwens geen geluk hebben? Miljoenen C programmeurs over de hele wereld'*\n\t-Jan de C God",
        "*'8 wacht, C = nee'*\n\t-Jan de C God",
        "*'Volgens Cosmopolitan is het nummer 9 gebonden aan Mars (Cosmopolitan, 14-04-24). Verder weet ik niks te bedenken'*\n\t-Jan de C God",
        "*'Ik vind 1 keer C al te veel, laat staan 10'*\n\t-Jan de C God",
        "*'11 september ofzo, ik spreek geen engels. Oh ja, C is stom >:('*\n\t-Jan de C God",
        "*'De Capocalypse is hier 0_0'*\n\t-Jan de C God"
    ];

    // special usecase
    client.on(Events.MessageCreate, (message) => {
        try {
            if (message.member.roles.cache.has('1229147630332805152' /* if member has nonprofit+ role */))
            {
                let len = message.content.toLowerCase().split("c").length - 1;
                
                if (len == 0) return; /* if string does not contain 'c', return */

                let chance = (98 - Math.log(len)*4);
                let rand = Math.random() * 100;

                if (rand > chance) 
                {
                    
                    if (len >= cStrings.length) len = cStrings.length - 1;

                    msg = `'**${message.content}**', more like \n# JAVASCRIPT\n\n${cStrings[len]}`;
                    
                    message.delete();
                    message.channel.send(msg);
                }

            }
        } catch(e) {console.log(`luckily this code can't really mess things up so it don't matter\n${e}`);}
    })

    // When the client is ready, run this code (only once)
    // We use 'c' for the event parameter to keep it separate from the already defined 'client'
    client.once(Events.ClientReady, (c) => {
        console.log(`Ready! Logged in as ${c.user.tag}`);
    });

    client.on(Events.Error, console.error);

    // Log in to Discord with your client's token
    client.login(token);

}

run();
