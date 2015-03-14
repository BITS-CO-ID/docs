// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'https://bits.co.id:1000',
	mail: {
	    transport: 'SMTP',
	    options: {
	        service: 'Gmail',
	        auth: {
	            user: 'nurulimamstudio@gmail.com',
	            pass: 'suck-IT26'
	        }
	    }
	},
        database: {
            client: 'mysql',
            connection: {
                    host: '127.0.0.1',
                    user: 'root',
                    password: 'suck-IT26',
                    database: 'ghost',
                    charset: 'utf8'
            }
        },

        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        }
    }
};

// Export config
module.exports = config;
