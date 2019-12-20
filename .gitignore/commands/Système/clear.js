const Command = require("../../modules/Command.js");

class Clear extends Command {
  constructor(client) {
    super(client, {
      name: "clear",
      description: "+clear nombre(< 100)",
      usage: "clear",
      category: "Système",
      permLevel: "⚡"
    });
  }

  async run(message, args) {
    try {
      message.channel.bulkDelete(args[0]).then(() => {
        message.channel
          .send(`J'ai supprimé ***${args[0]} messages*** pour vous !`)
          .then(message => message.delete(5000));
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Clear;
