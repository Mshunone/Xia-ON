let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sn = '10'
let sh = '15'
let sp = '25'
let sv = '75'
//premium
let ph = '15'
let pn = '5'
let pp = '25'
let pv = '35'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Normal:* _${sn}k/grup (1 Bulan)_
┊⫹⫺ *Hemat:* _${sh}k/grup (2 Bulan)_
┊⫹⫺ *Pro:* _${sp}k/grup (3 Bulan)_                                                      
┊⫹⫺ *Vip:* = _${sv}k/grup (12 Bulan)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _${ph}k (1 Bulan)_
┊⫹⫺ *Normal:* _${pn}k (1 Minggu)_
┊⫹⫺ *Pro:* _${pp}k (2 Bulan)_
┊⫹⫺ *Vip:* _${pv}k (8 Bulan)_                                               
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Gopay:* [--]
• *Shopay:* [--]

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Keuntungan prem apa?
💬: Chek katalog bot !
🗣️: Bot nya work?
💬: Work lah 99% !
[! Uang, di tf ga bisa di back !]
▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* HEMAT • Premium', description: 'PRICE: ' + ph + 'k (1 minggu)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* NORMAL • Premium', description: 'PRICE: ' + pn + 'k (1 bulan)' },
	{title: "🌟 PRO", rowId: '.order *Paket:* PRO • Premium', description: 'PRICE: ' + pp + 'k (4 bulan)' },
	{title: "🌟 VIP", rowId: '.order *Paket:* VIP • Premium', description: 'PRICE: ' + pv + 'k (8 bulan)' },
	{title: "🌟 PERMANENT", rowId: '.order *Paket:* PERMANENT • Premium', description: 'PRICE: ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
