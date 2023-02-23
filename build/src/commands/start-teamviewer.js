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
const fs = require("fs");
const child_process_1 = require("child_process");
module.exports = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('start-teamviewer')
        .setDescription('Starts teamviewer if it isn not open already.'),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const prc = (0, child_process_1.exec)(`screen -dm teamviewer -X "teamviewer"`);
            yield interaction.reply({
                content: "Did thayut",
                ephemeral: true,
            });
        });
    }
};
