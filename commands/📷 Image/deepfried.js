const https = require('https');
const url = 'https://www.reddit.com/r/deepfriedmemes/hot/.json?limit=100';
const Discord = require('discord.js');

module.exports = {
  // Information
  name: 'deepfried',
  aliases: ['df'],
  description: 'Get a random meme from Reddit/deepfried.',

  // Function
  run: (client, command, msg, args) => {
    https.get(url, (res) => {
      let body = '';

      res.on('data', (chunk) => {
        body += chunk;
      });

      res.on('end', () => {
        const response = JSON.parse(body);
        const index = response.data.children[Math.floor(Math.random() * 99) + 1].data;
        if (index.post_hint !== 'image') {
          var text = index.selftext;
          const textembed = new Discord.RichEmbed()
            .setTitle(subredditname)
            .setColor(0xff4d4d)
            .setDescription(`[${title}](${link_to_post})\n\n${text}`)
            .setURL(`https://reddit.com/${subredditname}`);

          msg.channel.send(textembed);
        }
        const image = index.url;
        var title = index.title;
        var link_to_post = 'https://reddit.com' + index.permalink;
        var subredditname = index.subreddit_name_prefixed;
        if (index.post_hint !== 'image') {
          const textembed = new Discord.RichEmbed()
            .setTitle(subredditname)
            .setColor(0xff4d4d)
            .setDescription(`[${title}](${link_to_post})\n\n${text}`)
            .setURL(`https://reddit.com/${subredditname}`);

          msg.channel.send(textembed);
        }
        const imageembed = new Discord.RichEmbed()
          .setTitle(subredditname)
          .setImage(image)
          .setColor(0xff4d4d)
          .setDescription(`[${title}](${link_to_post})`)
          .setURL(`https://reddit.com/${subredditname}`);
        msg.channel.send(imageembed);
      }).on('error', function(e) {
        console.log('Got an error: ', e);
      });
    });
  },
};