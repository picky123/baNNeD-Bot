const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NDQ1NTc4NDY0NjI0Mzc3ODg2.Dds7Yw.tBHKa6zCQ-gxyP8dhfohg9MN1k8'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send(':no_bell:');
  }
});

client.login('NDQ1NTc4NDY0NjI0Mzc3ODg2.Dds7Yw.tBHKa6zCQ-gxyP8dhfohg9MN1k8');

client.on('ready', () => {
  client.user.setGame('👑𝘉𝘈𝘕𝘕𝘌𝘋.', 'https://www.twitch.tv/streamerhouse')
})

client.on('guildMemberAdd', member => {
    member.guild.channels.get('444944051544915978').setName(`Member Count: ${member.guild.memberCount}`);
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('444944051544915978').setName(`Member Count: ${member.guild.memberCount}`);
});
