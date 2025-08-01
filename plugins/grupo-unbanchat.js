let handler = async (m, { conn, usedPrefix, command, args }) => {
  if (!(m.chat in global.db.data.chats)) {
    return conn.reply(m.chat, `《✦》¡Este chat no está registrado!.`, m);
  }

  let chat = global.db.data.chats[m.chat];

  if (command === 'jin') {
    if (args.length === 0) {
      const estado = chat.isBanned ? '✗ Desactivado' : '✓ Activado';
      const info = `
「✦」Un administrador puede activar o desactivar a *${botname}* utilizando:

> ✐ *${usedPrefix}boton* para activar
> ✐ *${usedPrefix}botoff* para desactivar

✧ Estado actual » *${estado}*
`;
      return conn.reply(m.chat, info, m);
    }

    if (args[0] === 'of') {
      if (chat.isBanned) {
        return conn.reply(m.chat, `《✧》${botname} ya estaba desactivado.`, m);
      }
      chat.isBanned = true;
      return conn.reply(m.chat, `✐ Ha *desactivado* a ${botname}!`, m);
    } else if (args[0] === 'on') {
      if (!chat.isBanned) {
        return conn.reply(m.chat, `《✧》*${botname}* ya estaba activado.`, m);
      }
      chat.isBanned = false;
      return conn.reply(m.chat, `✐ Has *act* a ${botname}!`, m);
    }
  }
};

handler.help = ['bot'];
handler.tags = ['grupo'];
handler.command = ['jin'];
handler.admin = true;
handler.owner = false;

export default handler;
