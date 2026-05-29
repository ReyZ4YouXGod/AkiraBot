const axios = require("axios")

module.exports = {
 command: ["githubpush", "gitpush"],

 async run(sock, m, { text }) {

 try {

 if (!text) {
 return m.reply(
`format:
.githubpush token