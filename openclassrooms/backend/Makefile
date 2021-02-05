BACKEND_PORT = 3000
FRONTEND_PORT = 4200
BASE_URL = http://localhost
BACKEND_BASE_URL = $(BASE_URL):$(BACKEND_PORT)
FRONTEND_BASE_URL = $(BASE_URL):$(FRONTEND_PORT)

start-backend: # Ou juste node server
	nodemon server.js

start-frontend:
	cd ../frontend && ng serve

browse-backend:
	firefox $(BACKEND_BASE_URL)

browse-frontend:
	firefox $(FRONTEND_BASE_URL)

request:
	curl $(FRONTEND_BASE_URL)
