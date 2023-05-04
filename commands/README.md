# Commands

Every command has it's own file, and should export an object with this structure:

```javascript
module.exports = {
    data: new SlashCommandBuilder()
        .setName("test-command")
        .setDescription("An example command"),
    async execute: (commandInteraction) => {
        await commandInteraction.reply("Replied to command");
    }
}
```

These commands are loaded dynamically on the execution of `../index.js`.