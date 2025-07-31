async function handler(m, { conn }) {
    let numcreador = '573176084059';
    let ownerJid = numcreador + '@s.whatsapp.net';

    let name = await conn.getName(ownerJid) || 'Owner';
    let about = (await conn.fetchStatus(ownerJid).catch(() => {}))?.status || 'Creador de bots de WhatsApp y del 螿Sᴜɴɢ•Jɪɴᴡᴏᴏ࿐🌀';
    let empresa = 'tecnoligi-shadows';

    let caption = `
✨ *Información del Dueño:* ✨

*👤 Nombre:* ${name}
*📞 Número:* wa.me/${numcreador}
*📝 Descripción:* ${about}
*🏢 Empresa:* ${empresa}
*📧 Email:* cdiaz1002490@gmail.com
*CANAL OFICIAL DE MI CREADOR:*  https://whatsapp.com/channel/0029Vb5iCXK0bIdf9GmoH824
`;

    await conn.sendMessage(m.chat, { text: caption }, { quoted: m });
}

handler.help = ['owner(MI CREADOR)'];
handler.tags = ['main'];
handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler;
