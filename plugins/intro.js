/*let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
𝐈𝐍𝐓𝐑𝐎‹•═════════════❏
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Kelas      :* 
│ *Asal         :* 
╰═════ WELCOME. ━━━━❏
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler */

import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu `= 𝐈𝐍𝐓𝐑𝐎‹•═════════════❏
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Kelas      :* 
│ *Asal         :* 
╰═════ WELCOME. ━━━━❏
`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, krtu, wm,'MENU','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com",
    mediaType: "VIDEO",
    description: "https://Instagram.com", 
    title: 'SaxiaBotz-MD',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler

