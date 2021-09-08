include .env

# Variables:
DOCKER_ENV=-f docker-compose.${ENVIRONMENT}.yml
user=${DEFAULT_USER_ID}
group=${DEFAULT_GROUP_ID}
command=bash

# Commands:
help: ## Print the list of all available commands with corresponding description.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_-]+:.*?## / {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

up: ## Launch all containers.
	docker-compose $(DOCKER_ENV) up -d
 	docker-compose $(DOCKER_ENV) run --rm --user=${user}:${group} resume-prototype-php-fpm composer install
 	docker-compose $(DOCKER_ENV) run --rm --user=${user}:${group} resume-prototype-node npm ci
down: ## Stop all containers.
	docker-compose $(DOCKER_ENV) down
build: ## Build all images.
	docker-compose $(DOCKER_ENV) build
restart: ## Restart all containers.
	docker-compose $(DOCKER_ENV) restart
ps: ## Print list of all containers.
	docker-compose $(DOCKER_ENV) ps
	
deploy: up ## Start all containers and generate production app version.
	docker-compose $(DOCKER_ENV) run --rm --user=${user}:${group} resume-prototype-node npm run prod
watch: ## Start watcher.
	docker-compose $(DOCKER_ENV) run --rm --user=${user}:${group} resume-prototype-node npm run watch

logs: ## Display logs of a container.
	docker-compose $(DOCKER_ENV) logs ${container}

run: ## Run container.
	docker-compose $(DOCKER_ENV) run --rm --user=${user}:${group} ${container} ${command}
exec: ## Execute container.
	docker-compose $(DOCKER_ENV) exec --user=${user}:${group} ${container} ${command}