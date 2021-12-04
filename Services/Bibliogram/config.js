module.exports = {
        website_origin: "https://bibliogram.pussthecat.org",
        port: 2003,
        has_privacy_policy: true,
        tor: {
                for: {
                        post_graphql: true,
                }
        },
        themes: {
                default:"pussthecat.org",
        },
        default_user_settings: {
                rewrite_youtube: "redirect.invidious.io",
                rewrite_twitter: "nitter.pussthecat.org",
        },
}
