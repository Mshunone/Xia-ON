/*let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
๐๐๐๐๐โนโขโโโโโโโโโโโโโโ
โ       *ใ Kartu Intro ใ*
โ *Nama     :* 
โ *Gender   :* 
โ *Umur      :* 
โ *Kelas      :* 
โ *Asal         :* 
โฐโโโโโ WELCOME. โโโโโ
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler */

import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu `= ๐๐๐๐๐โนโขโโโโโโโโโโโโโโ
โ       *ใ Kartu Intro ใ*
โ *Nama     :* 
โ *Gender   :* 
โ *Umur      :* 
โ *Kelas      :* 
โ *Asal         :* 
โฐโโโโโ WELCOME. โโโโโ
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

