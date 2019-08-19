const PROXY_CONFIG = [
    {
        context: [
            '/Inicial/user'
        ],
        target: "https://3n2bjmr03a.execute-api.us-east-1.amazonaws.com",
        secure: false,
        changeOrigin: true
    }
]
module.exports = PROXY_CONFIG;