import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { Telegraf, Context } from 'telegraf';
import {Update} from 'typegram';
import dotenv from "dotenv";
dotenv.config();

const bot: Telegraf<Context<Update>> = new Telegraf(process.env.BOT_TOKEN as string);

const chatId: number = 982089486;
// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run the middleware
  await runMiddleware(req, res, cors)
  bot.telegram.sendMessage(chatId, "Hello");
  res.json({ message: 'Hello Everyone!' })
}
