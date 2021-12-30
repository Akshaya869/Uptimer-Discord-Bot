const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "help",
aliases: ["h", "cmd"],
run: async(client, message, args) => {
	const help = new MessageEmbed()
	.setAuthor(`help`, client.user.displayAvatarURL())
	.setDescription(`**Command List of <BOTNAME>**`)
.setThumbnail(client.user.displayAvatarURL())
		.setColor(client.embedcolor)
		.addField(`> <:DGH_region:923191580377100308> Info`, '`help`, `ping`, `uptime`')
	.addField(`> <a:DGH_on:923191651768336455> Monitoring`, '`monitor`, `remove`, `stats`, `total`')
	.setFooter(client.user.username)
.setTimestamp()
	message.channel.send(help)
}
}
