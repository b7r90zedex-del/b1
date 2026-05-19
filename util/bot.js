import Eris from "eris";
import { Database as JsonDatabase } from "st.db";
import { sendDM, shuruhatik } from "./functions.js";
import runCommands from "./commands.js";
import { createSpinner } from 'nanospinner'
export default async function (debug = false, config, is_replit = (process.env.REPL_ID && process.env.REPL_SLUG && process.env.REPL_OWNER)) {
