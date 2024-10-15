const { AoiClient, LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: "MTI5NTQyOTA2NDA0NzQ2MDQwNQ.GGalbM.P9PJAPf14BEME9wvVnuIaMvqazkDxAsYV3CpWw",
  prefix: "$",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "58a1a516dc3d45440ca69c1ad7b46897",
  }
});


client.status({
  name: "internet ta uma bst jesus",
  type: "CUSTOM",
  status: "dnd",
  time: "5"
});

client.status({
  name: "Flow: um bot(sendo) preparado para seu servidor!",
  type: "CUSTOM",
  status: "dnd",
  time: "15"
});


const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands")