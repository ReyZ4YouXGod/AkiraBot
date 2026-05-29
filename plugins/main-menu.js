const fs = require("fs");

const {
    loadingBar
} = require("../system/loading");

function runtime(seconds) {

    seconds = Number(seconds);

    const d =
        Math.floor(seconds / (3600 * 24));

    const h =
        Math.floor(
            seconds % (3600 * 24) / 3600
        );

    const m =
        Math.floor(
            seconds % 3600 / 60
        );

    const s =
        Math.floor(seconds % 60);

    return [
        d ? `${d} Hari` : "",
        h ? `${h} Jam` : "",
        m ? `${m} Menit` : "",
        s ? `${s} Detik` : ""
    ].join(" ").trim();
}

module.exports = {

    command: [
        "menu",
        "help"
    ],

    run: async (
        sock,
        m,
        {
            prefix,
            isPremium,
            isOwner
        }
    ) => {

        try {

            const jid = m.chat;

            await loadingBar(
                sock,
                jid,
                "Loading Menu"
            );

            const now = new Date();

            const jam =
                now.toLocaleTimeString(
                    "id-ID",
                    {
                        timeZone:
                            "Asia/Jakarta"
                    }
                );

            const tanggal =
                now.toLocaleDateString(
                    "id-ID",
                    {
                        timeZone:
                            "Asia/Jakarta"
                    }
                );

            const hari =
                now.toLocaleDateString(
                    "id-ID",
                    {
                        weekday: "long",
                        timeZone:
                            "Asia/Jakarta"
                    }
                );

            const uptime =
                runtime(
                    process.uptime()
                );

            const statusUser =
                isOwner
                    ? "Owner"
                    : isPremium
                    ? "Premium"
                    : "User";
                    
            const teks = `
╔══════════════════╗
║      AKIRABOT
╚══════════════════╝

🤖 NameBot : AkiraBot
👑 Creator : ReyCloudDev
⚡ Version : 1.0 Beta Tes

╔══════════════════╗
║      BOT INFO
╚══════════════════╝

🕒 Jam      : ${jam}
📅 Tanggal  : ${tanggal}
📆 Hari     : ${hari}
⏳ Runtime  : ${uptime}
👤 Status   : ${statusUser}

╔══════════════════╗
║      MAIN MENU
╚══════════════════╝

📌 GENERAL
│ ${prefix}menu
│ ${prefix}ping

🎨 MAKER
│ ${prefix}fakeff nickname
│ ${prefix}fakewafat

💳 QRIS
│ ${prefix}qris nominal

📡 PANEL
│ ${prefix}1gb username
│ ${prefix}2gb username
│ ${prefix}3gb username
│ ${prefix}4gb username
│ ${prefix}5gb username
│ ${prefix}6gb username
│ ${prefix}7gb username
│ ${prefix}8gb username
│ ${prefix}9gb username
│ ${prefix}10gb username
│ ${prefix}unli username

🎭 FUN
│ ${prefix}fakeff
│ ${prefix}fakewafat

╚══════════════════╝

Powered By ReyCloudDev
`;

            const image =
                fs.existsSync(
                    "./media/menu.jpg"
                )
                    ? fs.readFileSync(
                          "./media/menu.jpg"
                      )
                    : null;

            if (image) {

                await sock.sendMessage(
                    jid,
                    {
                        image,
                        caption: teks
                    },
                    {
                        quoted: m
                    }
                );
            } else {

                await m.reply(teks);
            }

            if (
                fs.existsSync(
                    "./media/sound.mp3"
                )
            ) {

                const audio =
                    fs.readFileSync(
                        "./media/sound.mp3"
                    );

                await sock.sendMessage(
                    jid,
                    {
                        audio,
                        mimetype:
                            "audio/mpeg",
                        ptt: true
                    },
                    {
                        quoted: m
                    }
                );
            }

            if (
                fs.existsSync(
                    "./media/sticker.webp"
                )
            ) {

                const sticker =
                    fs.readFileSync(
                        "./media/sticker.webp"
                    );

                await sock.sendMessage(
                    jid,
                    {
                        sticker
                    },
                    {
                        quoted: m
                    }
                );
            }

        } catch (e) {

            console.log(e);

            m.reply(
                `Error:\n${e}`
            );
        }
    }
};