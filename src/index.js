import pkg from "discord.js"
import dotenv from "dotenv"
import { REST } from "@discordjs/rest"
const { Client, GatewayIntentBits} = pkg
dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]});

const token = process.env.TOKEN

// const commands = [
//     new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!')
// ]
// .map(command => command.toJSON());

// const rest = new REST({ version: '10' }).setToken(token);

// rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
// 	.then(() => console.log('Successfully registered application commands.'))
// 	.catch(console.error);

client.login(token)

client.once("ready", ()=> {
    console.log("Bot is ready!!!")
})

client.on("messageCreate", msg =>{
    if(msg.content === "Viva!") {
        console.log("escuto aqui")
        msg.reply("Sim, Mestre");
    }
    console.log(msg.content)
    console.log("escuto")
})
