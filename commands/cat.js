const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot,messages,args) => {

  let response = await superagent.get(`http://aws.random.cat//meow`);
  let dogembed = new Discord.RichEmbed()
  .setColor("#da3681")
  .setTitle("Cat :cat:")
  .setImage(response.body.file);

  messages.channel.send(dogembed);
}
module.exports.help = {
  name: "cat"
}
