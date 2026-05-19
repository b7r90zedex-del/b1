import { InteractionCollector } from 'eris-collects';
import { getRandomDarkHexCode, getRandomNumber } from "roulette-image";
import { startRoundRoulette, disabledMultipleButtons, getMultipleButtons } from "./functions.js"
const roulette_games = new Map();
export default async function (bot, interaction, type = "slash", settings) {
  let roulette_command_names = await settings.has("roulette_command_names") ? await settings.get("roulette_command_names") : ["roulette", "روليت"]
