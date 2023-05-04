# codeclubot

A discord bot made by and for ARHCODE, a small club of students who like programming at the Adriaan Roland Holst college in the Netherlands.

### Usage

For this program to work, there needs to be a .env present in the project root (`codeclubot/`). This file should contain a `TOKEN` for a discord bot, a `GUILDID` for a development server and a `CLIENTID` for a discord bot.

To start a development server: `$ npm run dev`

To start a production server (from linux terminal): `$ ROLE=BOT /usr/bin/node index.js`

To refresh slash commands (from linux terminal): `$ ROLE=REFRESH /usr/bin/node index.js`

There are also run.sh and run.bat files for linux and windows respectively