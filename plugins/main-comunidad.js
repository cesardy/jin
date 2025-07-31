const handler = async (m, { conn }) => {
  let gifUrl = "https://files.catbox.moe/uf452a.jpg";

  let text = `
 ──────── ⚔ ────────  
     *COMUNIDAD*  
──────── ⚔ ────────  

*Bot Jin woo*  
• ,👥➤ **Grupo de WhatsApp de la comunidad de 螿Sᴜɴɢ•Jɪɴᴡᴏᴏ࿐🗡️**  
   Únete para compartir y resolver dudas con otros usuarios. 
  ➤https://chat.whatsapp.com/K9xtPRz8Uyt75C8U4xfE7F?mode=r_c

• 📢 ➤ *Canal de cesdy Ai*  
   Recibe actualizaciones, noticias y lanzamientos del bot.  
https://chat.whatsapp.com/K9xtPRz8Uyt75C8U4xfE7F?mode=r_c
• 💬 ➤ *Grupo de WhatsApp activo*  
   Chatea con usuarios en tiempo real y sé parte de la conversación y usa al bot que esta de uso libre.  
➤https://chat.whatsapp.com/K9xtPRz8Uyt75C8U4xfE7F?mode=r_c

──────── ⚔ ────────  
🔍 *¿Sabías que...?* 
- El bot Ai es actualizado regularmente para mejorar su desempeño.  
- Puedes sugerir mejoras o reportar errores directamente en los grupos.  
- Nuestra comunidad sigue creciendo y cuenta con soporte activo.  
-
`.trim();


  await conn.sendMessage(
    m.chat,
    {
      video: { url: gifUrl },
      gifPlayback: true, 
      caption: text,
      mentions: [m.sender], 
    },
    { quoted: m }
  );
};

handler.command = /^(comunidad)$/i; 
export default handler;