import { Database } from 'st.db';
import { Database as ReplitDB } from "quick.replit";
import inquirer from "inquirer";
import startBot from "./bot.js";
import { Interval } from 'quickinterval';
import { createRouletteGifImage, shuffleArray, getRandomDarkHexCode, createRouletteImage, getRandomNumber } from "roulette-image";
import { InteractionCollector } from 'eris-collects';
