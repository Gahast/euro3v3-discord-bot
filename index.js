import { Client, GatewayIntentBits, Events } from "discord.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  console.log("Received command:", interaction.commandName);

  if (interaction.commandName === "euro_ping") {
    await interaction.reply("🏓 Pong from Euro3v3");
  }
});

client.login(process.env.DISCORD_TOKEN);
