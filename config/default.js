const pkg = require('../package.json')

module.exports = {
    package: pkg,
    basePath: '/xcare',
    server: {
        httpPort: 8080,
        httpsPort: 8443
    }
}