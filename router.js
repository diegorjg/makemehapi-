const Hapi = require('hapi');

(async () => {
    try {
        const server = Hapi.Server({ 
            host: 'localhost',
            port: Number(process.argv[2] || 8080) 
        });

        server.route({
            path: '/{name}',
            method: 'GET',
            handler: function (request, h) {
                return `Hello ${request.params.name}`;

                
            }
        });

        await server.start();

        console.log(`Server running at: ${server.info.uri}`);
    } catch (error) {
        console.log(error);
    }
})();