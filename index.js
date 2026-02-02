import { Client, GatewayIntentBits, Events } from "discord.js";
import http from "http";

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "euro_ping") {
    await interaction.reply("🏓 Pong from Euro3v3");
  }
});

client.login(process.env.DISCORD_TOKEN);

/* ---- KEEP RAILWAY ALIVE ---- */
const PORT = process.env.PORT || 3000;

http
  .createServer((_, res) => {
    res.writeHead(200);
    res.end("OK");
  })
  .listen(PORT, () => {
    console.log("HTTP keepalive listening on port", PORT);
  });
