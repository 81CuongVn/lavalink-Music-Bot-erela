const {
  MessageEmbed
} = require(`discord.js`);
const config = require(`${process.cwd()}/botconfig/config.json`);
const ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { handlemsg } = require(`${process.cwd()}/handlers/functions`);
    module.exports = {
  name: `8d`,
  category: `👀 Filter`,
  aliases: [``],
  description: `Applies a 8D Filter`,
  usage: `8d`,
  parameters: {"type":"music", "activeplayer": true, "previoussong": false},  
  run: async (client, message, args, cmduser, text, prefix, player) => {
    
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
      player.node.send({
        op: "filters",
        guildId: message.guild.id,
        equalizer: player.bands.map((gain, index) => {
            var Obj = {
              "band": 0,
              "gain": 0,
            };
            Obj.band = Number(index);
            Obj.gain = Number(gain)
            return Obj;
          }),
          rotation: {
            "rotationHz": 0.2, 
        },
      });
      player.set("filter", "🔊 8D");
      return message.channel.send({embeds :[new MessageEmbed()
        .setColor(es.color).setThumbnail(es.thumb ? es.footericon : null)
        
        .setTitle(eval(client.la[ls]["cmds"]["filter"]["3d"]["variable1"]))
        .setDescription(eval(client.la[ls]["cmds"]["filter"]["3d"]["variable2"]))
      ]});
  }
};
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.dev
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
