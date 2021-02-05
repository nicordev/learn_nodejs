# Node.js

1. créer un dossier pour le projet
1. `yarn init` initialise le projet en créant un fichier `package.json` :

    ```json
    {
        "name": "backend",
        "version": "1.0.0",
        "main": "server.js",
        "license": "MIT",
        "dependencies": {}
    }
    ```

1. `node nomFichier.js` exécute un fichier javascript

    Exemple de fichier javascript pour lancer un serveur node :

    ```
    // server.js
    const httpModule = require('http');
    const server = httpModule.createServer((request, response) => {
        response.end('Hello World!');
    });

    server.listen(process.env.PORT || 3000);
    ```