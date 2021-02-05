PORT = 3000
BASE_URL = http://localhost:$(PORT)

start: # Ou juste node server
	nodemon server.js

browse:
	firefox $(BASE_URL)

request:
	curl $(BASE_URL)