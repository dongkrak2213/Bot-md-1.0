const fs = require('node:fs');

const config = {
    owner: ["6283136099660"],
    name: "ʜᴀɴᴀᴋᴏ-ᴋᴜɴ-ʙᴏᴛᴢ",
    ownername: 'ʟᴇᴏᴏxᴢʏ', 
    ownername2: 'ᴅᴇᴋᴜ',
    prefix: [".", "?", "!", "/", "#"], //Tambahin sendiri prefix nya kalo kurang
    wwagc: 'https://chat.whatsapp.com/KM6AHNSG8J17HBFuqRG96T',
    saluran: '120363335989645846@newsletter', 
    jidgroupnotif: '120363250393272873@g.us', 
    saluran2: '120363335989645846@newsletter', 
    jidgroup: '120363250393272873@g.us', 
    wach: 'https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F', 
    sessions: "session",
    sticker: {
      packname: "〆 ʜᴀɴᴀᴋᴏ-ᴋᴜɴ-ʙᴏᴛᴢ",
      author: "ʙʏ: ᴅᴇᴋᴜ/ʟᴇᴏᴏxᴢʏ 〆"
    },
   messages: {
      wait: "*( Loading )* Tunggu Sebentar...",
      owner: "*( Denied )* Kamu bukan owner ku !",
      premium: "*( Denied )* Fitur ini khusus user premium",
      group: "*( Denied )* Fitur ini khusus group",
      botAdmin: "*( Denied )* Lu siapa bukan Admin group",
      grootbotbup: "*( Denied )* Jadiin Yuta-Botz admin dulu baru bisa akses",
   },
   database: "hanako-db",
   tz: "Asia/Jakarta"
}

module.exports = config

let file = require.resolve(__filename);
fs.watchFile(file, () => {
   fs.unwatchFile(file);
  delete require.cache[file];
});
