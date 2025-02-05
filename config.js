const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU2ZKqSBT8lYl6hTuyyWJERwyCooKKC24T96GEAotdKFDo8N8nsLuj+2HunR6eKqqKPFknM88rSDNcIhM1YPAK8gLXkKBuSZocgQEYVr6PCkADDxIIBmCqekNVGtte3eyvhjtetbk7aYmUh4JVLTheyuVmJOVxyDsv4EGDvDrH2P0NYE/hajs4qpO9rgTmeuhc1tzuaOz6ZTi6DZXVhk9SIV7cqSB6AY8OEeICp8Eov6AEFTA2UWNDXHyP/nVMXXRzWqbQXbl+6/lovA/H5paBttDcxTLD1vYkOtokVb9H3xOmXm7fV3g/bqlEnMztnbXyfNbrC/y+kmY3WNf2dgwnqfBGv8RBiryph1KCSfPtvrtLdNKcGztvnHI+2iMK23cO6cV01/baxMdiaeySG9XfGKvvEd+r1m0sGFdUbZFgL+74ujHPY33Rs1pu1hdTz8SVt5sq7jj6StwuPrwS/Z++O0OfldSb3AZLxmdna2mpq85NcZjkkl1nNlWmS1mHs96Zi75Hn1rtqVSb2X0lEDVHGpGLdmKRJiTUMGiXaT8UbcexR5YyOX7Sh6QqfscynHu5cZ+UWb5YG9ZJH0abzXprxWx/xVK60Ivznn8S5CS01YugVuZKD47BwrjcENeOhFpU7EZwm5Xp90IiNgfh4CE1vL08XxShZuqBAfugQYECXJICEpylzz1OogH06g1yC0Se7QXcZGM0us+G7nEsD/untjEN6u5PS38U2JZVHM1km0x2rDBdvQAa5EXmorJE3gSXJCuaOSpLGKASDP7+SYMU3cmbcF05nqWBj4uSOGmVxxn0PlT9OISum1Up2TSpq3ULVIAB87mNCMFpUHZ9rFJYuBdcI+0CSQkGPoxL9KCBh2rsog4PnCcz7n7Yn7Z9o9E3Fwlr/nB+6yhfsvTtCitBv8/I0g/kSfIPgTuzPyDvoh8cK/cVWWEYgWcBDfB7Zrp/fp0Tfj2P+FlVzuWsWcen+aLSp6fUJ2H2lOGt96hAHhiQokI0OEM3qvJtFqH0N7jNUaWOUZ6w4TUjlCaY8b2AqyUHD6MvuG+agsHr55zSMq/DszRjshF1GdAgeVoQdy/nRF7iBVZhWEYZyH+Vf966PsI8/zNFBNAghd1lcIM1SmD6xxzF7qWr9i5Fh+MhAnFcggHQptW97gXaaG4KocQYhhoEqhao4FO6jwy8eaxfL3z3EjZ7mbeui7Xgn+KrpSxViXciTlQrd2aJqVhfOdZ9+RcQMADCeOelB8vGq2vi4Tu0GKNNuGBmXPsGE4653d05K32MYH1fJ/l6HxaUXrCjQ1Y3vl9vXNEc3Sxpx5nNWT3dW4l19kjrAvNhoa/FeuU81aMzAw8o2xpE4KerfV37xghOxzdRSDfK2ZZY1Y9MW8YlPi0ilEdhk1VTvYjDNj5MFmOkeOal3bP+oRAt+SKEwVs6n9Mhfp/K+Jmb13fD+Rg9h9y7Fv8l2af1mQf9BeJ9av7CXkN0bg/89CjH9aIRQwdNuBPEvW2wVNjZogqsVNtQOVWIhBzA4/GTBnkMiZ8VCRiAMjlDQIMYlkT9jO4WJ6gkMMnBgJV4WVI4hhVpkDRqnm8IJB+JB2r3DdsIPP4BAek2Yw0IAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "waveman Melch ",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " waveman Melch ",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

