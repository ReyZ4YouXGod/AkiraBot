const axios = require("axios")
const chalk = require("chalk")

const CURRENT_VERSION = require("../package.json").version
const GITHUB_REPO = "ReyZ4YouXGod/AkiraBot"

async function checkUpdate() {
    try {
        const res = await axios.get(
            `https://raw.githubusercontent.com/${GITHUB_REPO}/main/package.json`
        )

        const latest = res.data?.version

        if (latest !== CURRENT_VERSION) {
            console.log(`[ UPDATE ] ${CURRENT_VERSION} -> ${latest}`)
        } else {
            console.log("[ SYSTEM ] Bot sudah versi terbaru")
        }

    } catch (err) {
        console.log("[ UPDATE ERROR ]", err.message)
    }
}

module.exports = checkUpdate
