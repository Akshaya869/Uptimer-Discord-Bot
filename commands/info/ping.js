module.exports = {
	name: "ping",
	run: async(client, message, args) => {
message.channel.send(`**<:DGH_backup:923191638480785509> Ping:** \`${client.ws.ping} ms\``)
}
}
