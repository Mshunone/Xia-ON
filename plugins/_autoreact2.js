import { readFileSync } from "fs"

let handler = async (m, { conn, text }) => {
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji

    conn.sendMessage(m.chat, {
          react: {
            text: em.getRandom(),
            key: m.key,
          }})
  
  }
handler.customPrefix = /(555)/i
handler.command = new RegExp
  
handler.mods = false

export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
