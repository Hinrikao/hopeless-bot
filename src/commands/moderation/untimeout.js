const {
    SlashCommandBuilder,
    PermissionFlagsBits,
    Client,
    ChatInputCommandInteraction,
    EmbedBuilder,
} = require("discord.js");

/** @type {import("@src/index").CommandStructure} */
module.exports = {
    data: new SlashCommandBuilder()
        .setName("untimeout")
        .setDescription("⏰ Remove timeout from a member.")
        .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
        .addUserOption((option) =>
            option
                .setName("member")
                .setDescription("The member to untimeout.")
                .setRequired(true),
        )
        .addStringOption((option) =>
            option
                .setName("reason")
                .setDescription("Reason for the the untimeout.")
                .setRequired(false),
        ),
    aliases: [],
    minArgsCount: 0,
    usage: "/untimeout | {prefix}untimeout",
    cooldown: 0,
    category: "MODERATION",
    premium: false,
    disabled: { slash: false, prefix: false },
    global: true,
    guildOnly: false,
    devOnly: false,
    botPermissions: ["ModerateMembers"],
    userPermissions: ["ModerateMembers"],
    run: async (client, message, args, data) => {},
    execute: async (client, interaction, data) => {
        const member = interaction.options.getMember("member");
        const reason = interaction.options.getString("reason");

        const errorsArray = [];
        const errorEmbed = new EmbedBuilder()
            .setAuthor({
                name: "Could not untimeout member due to",
            })
            .setColor(client.colors.americanRose);

        if (!member) {
            return interaction.followUp({
                embeds: [
                    errorEmbed.setDescription("Member has most likely left the server."),
                ],
                ephemeral: true,
            });
        }

        if (!member.moderatable || !member.manageable) {
            errorsArray.push("Selected member is not moderatable by this bot.");
        }

        if (interaction.member.roles.highest.position < member.roles.highest.position) {
            errorsArray.push("Selected member has a higher role position than you.");
        }

        if (errorsArray.length) {
            return interaction.followUp({
                embeds: [errorEmbed.setDescription(errorsArray.join("\n"))],
                ephemeral: true,
            });
        }

        await member.timeout(10000, reason);
        let content;

        if (reason) {
            content = `**✅ @${member.user.username} has been untimed out for ${reason}**`;
        } else {
            content = `**✅ @${member.user.username} has been untimed out!**`;
        }

        return interaction.reply({
            content: content,
        });
    },
};
