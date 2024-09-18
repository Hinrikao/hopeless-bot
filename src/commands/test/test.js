const {
    SlashCommandBuilder,
    InteractionContextType,
    PermissionFlagsBits,
} = require("discord.js");

/**
 * @type {import("../../structures/CommandStructure.js")}
 */
module.exports = {
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("testing Stuff")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setNSFW(false)
        .setContexts(
            InteractionContextType.BotDM,
            InteractionContextType.Guild,
            InteractionContextType.PrivateChannel,
        ),
    aliases: ["te", "est", "tt"],
    minArgsCount: 0,
    usage: "h!test | /test",
    cooldown: 0,
    category: "TEST",
    premium: false,
    botPermissions: [],
    userPermissions: ["Administrator"],
    run: async (client, message, args, data) => {},
    /**
     * @param {Object} data
     */
    execute: async (client, interaction, data) => {
        interaction.reply({
            content: `**Current commands collection size: ${client.commands.size}**`,
            ephemeral: true,
        });
    },
};
