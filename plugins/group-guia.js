let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let img = 'https://files.catbox.moe/6dewf4.jpg'
let texto = `📋 𝙂𝙪𝙞́𝙖 𝙗𝙖́𝙨𝙞𝙘𝙖 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨:

.𝘰𝘯/𝘰𝘧𝘧 𝘢𝘶𝘥𝘪𝘰𝘴 🎶
.𝘵𝘰𝘥𝘰𝘴 👨‍👩‍👧‍👦
*(𝘦𝘵𝘪𝘲𝘶𝘦𝘵𝘢 𝘢𝘭 𝘨𝘳𝘶𝘱𝘰 𝘤𝘰𝘯 𝘮𝘦𝘯𝘤𝘪𝘰́𝘯)* .𝘯𝘰𝘵𝘪 𝘺 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 ✉️
*(𝘯𝘰𝘵𝘪𝘧𝘪𝘤𝘢 𝘢𝘭 𝘨𝘳𝘶𝘱𝘰 𝘴𝘪𝘯 𝘮𝘦𝘯𝘤𝘪𝘰́𝘯)*
.𝘨𝘳𝘶𝘱𝘰 𝘢𝘣𝘳𝘪𝘳/𝘤𝘦𝘳𝘳𝘢𝘳 ➡️⬅️
*(𝘢𝘣𝘳𝘦 𝘨𝘳𝘶𝘱𝘰/𝘤𝘪𝘦𝘳𝘳𝘢 𝘨𝘳𝘶𝘱𝘰)* .𝘧𝘢𝘯𝘵𝘢𝘴𝘮𝘢𝘴 👤
*(𝘮𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘰𝘴 𝘪𝘯𝘢𝘤𝘵𝘪𝘷𝘰𝘴)* .𝘰𝘯/𝘰𝘧𝘧 𝘸𝘦𝘭𝘤𝘰𝘮𝘦 👋
*(𝘢𝘤𝘵𝘪𝘷𝘢 𝘣𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘢𝘴 𝘺 𝘥𝘦𝘴𝘱𝘦𝘥𝘪𝘥𝘢𝘴)*
.𝘴𝘦𝘵𝘸𝘦𝘭𝘤𝘰𝘮𝘦 𝘛𝘦𝘹𝘵𝘰 @𝘶𝘴𝘦𝘳 ✍️
*(𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘢𝘴 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰)* .𝘴𝘦𝘵𝘣𝘺𝘦 𝘛𝘦𝘹𝘵𝘰 @𝘶𝘴𝘦𝘳 🚶‍♂️
*(𝘋𝘦𝘴𝘱𝘦𝘥𝘪𝘥𝘢𝘴 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰)* .𝘱𝘳𝘰𝘮𝘰𝘵𝘦 *@𝘵𝘢𝘨* ✨
*(𝘥𝘢 𝘢𝘥𝘮𝘪𝘯 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯)*
.𝘥𝘦𝘮𝘰𝘵𝘦 *@𝘵𝘢𝘨* 🚫
*(𝘳𝘦𝘵𝘪𝘳𝘢 𝘢𝘥𝘮𝘪𝘯 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯)*
.𝘰𝘯 𝘮𝘰𝘥𝘰𝘢𝘥𝘮𝘪𝘯 🔒
*(𝘉𝘰𝘵 𝘴𝘰𝘭𝘰 𝘱𝘢𝘳𝘢 𝘢𝘥𝘮𝘪𝘯𝘴)*
.𝘰𝘧𝘧 𝘮𝘰𝘥𝘰𝘢𝘥𝘮𝘪𝘯 🔓
*(𝘉𝘰𝘵 𝘱𝘢𝘳𝘢 𝘶𝘴𝘰 𝘦𝘯 𝘨𝘦𝘯𝘦𝘳𝘢𝘭)*
.𝘣𝘰𝘵 𝘛𝘦𝘹𝘵𝘰 💬
*(𝘏𝘢𝘣𝘭𝘢 𝘤𝘰𝘯 𝘦𝘭 𝘉𝘰𝘵)* .𝘥𝘦𝘭 🗑️
*(𝘦𝘭𝘪𝘮𝘪𝘯𝘢 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘥𝘦 𝘢𝘭𝘨𝘶𝘪𝘦𝘯)* .𝘮𝘦𝘯𝘶 📚
*(𝘔u𝘦𝘴𝘵𝘳𝘢 𝘛𝘰𝘥𝘰𝘴 𝘓𝘰𝘴 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴)*
𝘋𝘶𝘥𝘢/𝘪𝘮𝘱𝘭𝘦𝘮𝘦𝘯𝘵𝘰́:
wa.me/573176084059`

const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.command = ['guia'] 
handler.register = true
export default handler
