import { Telegraf } from "telegraf"
/**
 * @type {Telegraf}
 */
let bot;

bot = bot || new Telegraf(process.env.BOT_TOKEN) 
export { bot }