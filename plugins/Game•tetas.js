let handler = async(m, { conn }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) {
    return m.reply(`${emoji} El contenido *NSFW* está desactivado en este grupo.\n> Un administrador puede activarlo con el comando » *#nsfw on*`);
    }

let img = 'https://delirius-apiofc.vercel.app/nsfw/boobs';

let text = '*🍭 TETAS*';

conn.sendMessage(m.chat, { image: { url: img }, caption: text }, { quoted: m });
m.react('✅');
}

handler.command = ['tetas'];
handler.estrellas = 0;

export default handler;