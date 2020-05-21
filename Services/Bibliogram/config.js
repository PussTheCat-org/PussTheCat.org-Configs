module.exports = {
        website_origin: "https://bibliogram.pussthecat.org",
        has_privacy_policy: true,
        themes: {
		default:"pussthecat.org"
	},
        caching: {
                ressource_cache_time: 3*60*60*1000,
        },
        use_assistant: {
                enabled: true,
                assistants: [
                        {
                                origin: "https://bibliogram.art",
                                key: "[REDACTED]",
                        },
                ],
        },
}
