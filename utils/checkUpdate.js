const axios = require("axios")

const CURRENT_VERSION = require("../package.json").version
const GITHUB_REPO = "ReyZ4YouXGod/AkiraBot"

let lastStatus = null

async function checkUpdate() {
    try {
        const res = await axios.get(
            `https://raw.githubusercontent.com/${GITHUB_REPO}/main/package.json`
        )

        const latest = res.data?.version

        if (!latest) return

        
        if (!lastStatus) {
            lastStatus = latest
            console.log(`[ SYSTEM ] Version aktif: ${CURRENT_VERSION}`)
            return
        }

        
        if (latest !== CURRENT_VERSION && lastStatus !== latest) {
            console.log(
                `[ UPDATE TERSEDIA ] ${CURRENT_VERSION} -> ${latest}`
            )
            lastStatus = latest
            return
        }

        // kalau sama, diam saja (tidak spam)
    } catch (err) {
        console.log("[ UPDATE ERROR ]", err.message)
    }
}

module.exports = checkUpdate
