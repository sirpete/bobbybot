module.exports = {
  // Information
  name: 'ping',
  aliases: ['.'],
  description: 'Test Bobby\'s response time.',
  // Requirements
  // Function
  run: (client, command, msg, args) => {
    msg.channel.send(`Pong! My connection to the server is \`${Date.now() - msg.createdTimestamp} ms\``);
  },
};