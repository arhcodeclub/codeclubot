"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const microbitserial = require("../microbitserial/write-microbit");
module.exports = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('toggle-light')
        .setDescription("Doesn't toggle the light, didn't expect that did ya?")
        .addIntegerOption(option => option.setName("color")
        .setDescription("Color for the led strip")
        .addChoices({ name: "red", value: 1 }, { name: "orange", value: 2 }, { name: "yellow", value: 3 }, { name: "green", value: 4 }, { name: "blue", value: 5 }, { name: "indigo", value: 6 }, { name: "biolet", value: 7 }, { name: "purple", value: 8 }, { name: "white", value: 9 })),
    execute(interaction) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let input = (_a = interaction.options.get("color")) === null || _a === void 0 ? void 0 : _a.value;
            if (!input)
                input = 9;
            microbitserial.write(`${input}`);
            yield interaction.reply({
                content: `Wrote ${input} to microbit`,
                ephemeral: true,
            });
        });
    },
};
