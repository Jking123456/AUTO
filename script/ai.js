const axios = require('axios');

module.exports.config = {
    name: "ai",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Jay", // Changed the credits to "Jay"
    description: "EDUCATIONAL",
    usePrefix: true,
    commandCategory: "AI",
    usages: "[question]",
    cooldowns: 10
};

module.exports.run = async function ({ api, event, args }) {
    const question = args.join(' ');
    const apiUrl = `https://markdevsapi-2014427ac33a.herokuapp.com/gpt4?ask=${encodeURIComponent(question)}`;

    if (!question) return api.sendMessage("send question", event.threadID, event.messageID);

    try {
        api.sendMessage("Homer AI Bot is typing..", event.threadID, event.messageID);

        const response = await axios.get(apiUrl);
        const answer = response.data.answer;

        api.sendMessage(`𝗔𝗜 🚀\n━━━━━━━━━━━━━━━━━━━\n𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻: ${question}\n━━━━━━━━━━━━━━━━━━━\n𝗔𝗻𝘀𝘄𝗲𝗿: ${answer}\n\nthis bot was create by Warren Hervas pogi\n𝓒𝓻𝓮𝓭𝓲𝓽𝓼: https://www.facebook.com/profile.php?id=61550188503841`, event.threadID, event.messageID); // Added the FB link
    } catch (error) {
        console.error(error);
        api.sendMessage("error to fetch response", event.threadID);
    }
};
