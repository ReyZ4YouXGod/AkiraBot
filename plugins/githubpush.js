const axios = require("axios")

module.exports = {
    command: ["githubpush", "gitpush"],

    async run(sock, m, { text }) {

        try {

            if (!text) {
                return m.reply(
`format:
.githubpush token|user|repo|path/file.js|code|message`
                )
            }

            let [token, user, repo, pathFile, code, message] =
                text.split("|")

            if (!token || !user || !repo || !pathFile || !code) {
                return m.reply("format salah jir")
            }

            m.reply("⏳ ngirim ke github...")

            const contentBase64 =
                Buffer.from(code).toString("base64")

            // cek file lama (buat ambil sha kalau update)
            let sha = null

            try {
                const check = await axios.get(
                    `https://api.github.com/repos/${user}/${repo}/contents/${pathFile}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                sha = check.data.sha
            } catch (e) {
                sha = null
            }

            const body = {
                message: message || "upload via bot",
                content: contentBase64
            }

            if (sha) body.sha = sha

            const upload = await axios.put(
                `https://api.github.com/repos/${user}/${repo}/contents/${pathFile}`,
                body,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            )

            if (upload.status === 200 || upload.status === 201) {
                return m.reply(
`✅ UPLOAD BERHASIL

📁 Repo: ${user}/${repo}
📄 File: ${pathFile}`
                )
            }

            m.reply("gagal upload ❌")

        } catch (err) {

            console.log(err)
            m.reply("error jir ❌")
        }
    }
}
