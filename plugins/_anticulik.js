let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `「 SaxiaBotzV1 」

    ╭━━━━「 SEWA 」
    ┊⫹⫺ Hemat: 5k/grup (1 minggu)
    ┊⫹⫺ Normal: 15k/grup (1 bulan)
    ┊⫹⫺ Standar: 30k/grup (2 bulan)
    ┊⫹⫺ Pro: 35k/grup (4 bulan)                                                      
    ┊⫹⫺ Vip: = 65k/grup (12 bulan)
    ╰═┅═━––––––๑
    
    ╭━━━━「 PREMIUM 」
    ┊⫹⫺ Hemat: 5k (1 Bulan)
    ┊⫹⫺ Normal: 15k (2/5 bulan)
    ┊⫹⫺ Pro: 25k (4 bulan)
    ┊⫹⫺ Vip: 35k (8 bulan)                                               
    ┊⫹⫺ Permanent: = 100k (Unlimited)
    ╰═┅═━––––––๑
    
    ⫹⫺ PAYMENT:
    • Pulsa : [Ga dulu]
    • Shopay: [---]
    • Gopay: [---]
    
    Nomor Owner :
    wa.me/6283805685278
    
    ▌│█║▌║▌║║▌║▌║█│▌
    
    #SaxiaBotV1`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
