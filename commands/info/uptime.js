const discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name:"uptime",
    description: "Show uptime of bot",
    aliases: ["up"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        let days = Math.floor(client.uptime / 86400000 );
        let hours = Math.floor(client.uptime / 3600000 ) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        let upembed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setAuthor(`My Uptime`, client.user.displayAvatarURL())
					.setThumbnail(client.user.displayAvatarURL())
					.setDescription(`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`)
        
			.setFooter(client.footer, client.user.displayAvatarURL())
        message.channel.send(upembed)
    }
}
