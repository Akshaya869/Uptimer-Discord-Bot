const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const fetch = require("node-fetch");

module.exports = {
	name: "monitor",
	run: async(client, message, args) => {
		if (!args[0]) {
      return message.channel.send(client.emotes.error + " **<:DGH_arrow:923191636681428992> Please give website link to monitor**");
    }

    if (!isURL(args[0])) {
      return message.channel.send(
        client.emotes.error + " **<:DGH_X_:923191632910745611> Given URL is invalid, Make sure you send working URL**"
      );
    }

    let database = JSON.parse(fs.readFileSync("./link.json", "utf8"));

    const check = database.find(x => x.id === message.author.id);

    if (check) {
      if (check.link.length === 5) {
        return message.channel.send(
          client.emotes.error + " **<:pepeWot:926124046746279966> You reached your limit, you can not add more than 5 website.**",
         );
      }

      let numb = database.indexOf(check);
      database[numb].link.push(args[0]);
    } else {
      database.push({
        id: message.author.id,
        name: message.author.username,
        link: [args[0]]
      });
    }

    fs.writeFile("./link.json", JSON.stringify(database, null, 2), err => {
      if (err) console.log(err);
    });
		const succesemb = new MessageEmbed()
		.setTitle(`${client.emotes.yes} Success`)
		.setDescription(`Added Your Website to monitoring`)
		.setColor(client.embedcolor)
.setTimestamp()

    message.channel.send(succesemb);

    message.delete();
	}
}

function isURL(url) {
  if (!url) return false;
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" +
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
    "((\\d{1,3}\\.){3}\\d{1,3}))|" +
    "localhost" +
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
    "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return pattern.test(url);
}
