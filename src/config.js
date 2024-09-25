module.exports = {
    bot: {
        defaultPrefix: process.env.DEAFULT_PREFIX,
        id: process.env.BOT_ID,
        token: process.env.BOT_TOKEN,
        secret: process.env.BOT_SECRET,
        invite: process.env.ALLOWED_INVITE,
        footer: `Copyright © 2023 - ${new Date().getFullYear()} | @theassassin0128`,
    },
    emojis: {
        normal: {
            error: "❌",
            check: "✔️",
            music: "🎵",
            volume: "🔉",
            ball: "🎱",
            christmas: "🎄",
            heart: "❤️",
            paper: "📰",
            scissors: "✂️",
            stone: "🪨",
            pong: "🏓",
            birthday: "🎂",
            clock: "⏰",
            gift: "🎁",
            medal: "🏅",
            party: "🎉",
            info: "ℹ️",
            arrowDown: "⬇️",
            arrowUp: "⬆️",
            dcredits: "💳",
            tv: "📺",
            slash: "",
        },
        Bot: {
            add: "📥",
            info: "ℹ️",
            min: "🔻",
        },
        economy: {
            pocket: "👛",
            bank: "🏦",
            coins: "💰",
        },
        music: {
            next: "⏭️",
            pause: "⏸️",
            previous: "⏮️",
            stop: "⏹️",
            play: "▶️",
            resume: "▶️",
            loop: "🔁",
            loop2: "🔂",
            shuffle: "🔀",
            speedup: "⏩",
            slowdown: "⏪",
            queue: "📄",
            repeat: "🔁",
        },
        badges: {
            bot: "🤖",
            management: "👑",
            bug: "🐛",
            developer: "👨‍💻",
            supporter: "👨‍🔧",
            team: "👨‍👩‍👧‍👦",
            booster: "🚀",
            partner: "🤝",
            voter: "🗳️",
            support: "🔧",
            moderator: "👮",
            designer: "🎨",
            active: "🔥",
            event: "🎉",
            vip: "👑",
            marketing: "📈",
        },
        animated: {
            loading: "🔄️",
        },
    },
    ownerId: process.env.OWNER_ID,
    serverId: process.env.SERVER_ID,
    devs: process.env.DEVELOPER_IDS,
    mongodbUri: process.env.MONGO_URI,
    antiCrash: {
        enabled: true,
    },
    links: {
        supportServer: "https://discord.gg/E6H9VvBdTk",
    },
    imageLinks: {
        glitch: "https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459_960_720.png",
    },
    cacheSize: {
        guilds: 100,
        users: 10000,
        members: 10000,
    },

    // PLUGINS
    automod: {
        enabled: false,
    },
    dashboard: {
        enabled: false,
        base_url: "",
        failure_url: "",
        port: "3000",
    },
    economy: {
        enabled: false,
        currency: "💵",
        daily_coins: 25,
        min_beg_amount: 10,
        max_beg_amount: 250,
    },
    music: {
        enabled: false,
        idle_time: 180000,
        max_search_results: 5,
        default_source: "YTM",
        lavalink_nodes: [
            {
                host: "lavalink.oddcoder.xyz",
                port: 443,
                password: "oddcoder",
                id: "Local Node",
                secure: true,
            },
        ],
    },
    giveaways: {
        enabled: false,
        reaction: "🎁",
    },
    image: {
        enabled: false,
        base_api: "https://strangeapi.fun/api",
    },
    moderation: {
        enabled: true,
        EMBED_COLORS: {
            TIMEOUT: "#102027",
            UNTIMEOUT: "#4B636E",
            KICK: "#FF7961",
            SOFTBAN: "#AF4448",
            BAN: "#D32F2F",
            UNBAN: "#00C853",
            VMUTE: "#102027",
            VUNMUTE: "#4B636E",
            DEAFEN: "#102027",
            UNDEAFEN: "#4B636E",
            DISCONNECT: "RANDOM",
            //MOVE: colors.Magenta,
        },
    },
    stats: {
        enabled: false,
        xpCoolDown: 10,
        defaultLevelUpMessage: "{member:tag}, You just advanced to **Level {level}**",
    },

    suggestion: {
        enabled: false,
        emoji: {
            upVote: "⬆️",
            downVote: "⬇️",
        },
    },
    ticket: {
        enabled: false,
    },
};
