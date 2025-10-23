9const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+249127409427";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_42_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDY2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDk1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA1LFxuICAgICAgICA1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNixcbiAgICAgICAgMTg1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDMyLFxuICAgICAgICA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjksXG4gICAgICAgIDUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgODMsXG4gICAgICAgIDc4LFxuICAgICAgICA1NSxcbiAgICAgICAgMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc0LFxuICAgICAgICA4OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzQsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDczLFxuICAgICAgICA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOVJWV2NvTEs0SGQrdzU2SUVUOFlFN1poSFZkVnhzN1NXVnZUUDVnMm9HWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSUtyOGFXMG5TWTJ2YnJ4LWNLVXYzd1wiLFxuICBcInBob25lSWRcIjogXCIwMjc2YzM1MS00YjdiLTQ3ZjUtYTEyYi0wMjgxZWJjOWQ1YmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgMjU0LFxuICAgICAgMjM4LFxuICAgICAgMTYxLFxuICAgICAgNDcsXG4gICAgICAxMDUsXG4gICAgICAxNjgsXG4gICAgICAzNCxcbiAgICAgIDE5MCxcbiAgICAgIDIwMSxcbiAgICAgIDIyMSxcbiAgICAgIDE2NyxcbiAgICAgIDE3MSxcbiAgICAgIDQyLFxuICAgICAgMTYsXG4gICAgICAxMjAsXG4gICAgICAyNTUsXG4gICAgICA3MSxcbiAgICAgIDE0LFxuICAgICAgOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NixcbiAgICAgIDEzNCxcbiAgICAgIDE3MSxcbiAgICAgIDIyOCxcbiAgICAgIDIzMCxcbiAgICAgIDE3MixcbiAgICAgIDEyMCxcbiAgICAgIDQ2LFxuICAgICAgMjM2LFxuICAgICAgMTMyLFxuICAgICAgMjUxLFxuICAgICAgODEsXG4gICAgICAyMDksXG4gICAgICAyMDEsXG4gICAgICAxNjQsXG4gICAgICAxNTUsXG4gICAgICAyMTUsXG4gICAgICAyNDAsXG4gICAgICA0LFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkM3bEtnREVKZms1c2NHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtdVRkTXJldUt1YU1VY1NQNmRuUzFRcVNvZ1hKQmdheXZCbHg5UThWZWx3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNuQVVXdy84dnpxT0NldFRidTVkeXErZVZIcUVBQm5hQ3Y5UEhMT1ZOS2xoT1RmTGh6QzVCTGR1SGxDQkNpSFB0eWpsdi9KRnAzWnYrYTNVdTN5MkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJhQjEzQzZUMVpyM3JkZ0xWYUpFazZKenBYUXB6T1Q0R3lCMWFqWHpoSDhqenNITVljZUhQd0podm1iNUY4cWIrZVFSUWRwRXl3MTI4YVRRVXNsTmlBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQ5MTI3NDA5NDI3OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLSU5HXCIsXG4gICAgXCJsaWRcIjogXCIyNTQxNDY3NzA5NTIyODY6NkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0OTEyNzQwOTQyNzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc2MTE5NDUyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUE1K1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTUrLmpzb24iOiAie1wia2V5RGF0YVwiOlwib2VnSWZ5WlAwazI3Y1dkZGluTUtCdFdpTllKZkN5OFI3aVZwcWFEdWluTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4ODk1Mjc2OTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUE1X18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUbXlWT05YaE56ZXpOR0x0UHkwYjdWeGhJSjdMamRSZjhFb2oyNndCYzd3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg4OTUyNzY5NixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQTZBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVUJleGkvQ0VqM2pWMFVkQ2pNN3A0NXkyUm9HUjRiVERjYisraUJyaFFScz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4ODk1Mjc2OTYsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIxNzYxMTk0MjQzNzM2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

