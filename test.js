const discord = require("discord.js");
const {PREFIX} = require("../config.js");

module.exports.run = (client, message, args) => {
        message.delete();
        
        const embed = new Discord.MessageEmbed()
        .setTitle(":tv:FMedia est en stream venez voir ça ! https://discord.gg/DeC9GvWN @everyone:tv:")
        return message.channel.send(embed)


}

module.exports.help = {
    name: 'onair'
};
