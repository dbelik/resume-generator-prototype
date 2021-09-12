include .env

# Variables:
## Command variables
DOCKER_COMPOSE=docker-compose -f docker-compose.${ENVIRONMENT}.yml
SH=sh
BASH=bash

## Container variables
NODE_CONTAINER=resume-prototype-node
PHP_FPM_CONTAINER=resume-prototype-php-fpm

## Argument variables
user=${DEFAULT_USER_ID}
group=${DEFAULT_GROUP_ID}
command=${BASH}

# Commands:
---------------: ## ------[ Docker essential commands ]---------
up: ## Launch all containers.
	$(DOCKER_COMPOSE) up -d
 	$(DOCKER_COMPOSE) run --rm --user=${user}:${group} $(PHP_FPM_CONTAINER) composer install
 	$(DOCKER_COMPOSE) run --rm --user=${user}:${group} $(NODE_CONTAINER) npm ci
down: ## Stop all containers.
	$(DOCKER_COMPOSE) down
build: ## Build all images.
	$(DOCKER_COMPOSE) build
restart: ## Restart all containers.
	$(DOCKER_COMPOSE) restart
ps: ## Print list of all containers.
	$(DOCKER_COMPOSE) ps
logs: ## Display logs of a container.
	$(DOCKER_COMPOSE) logs ${container}
	
---------------: ## ------[ Generate commands ]---------
deploy: up ## Start all containers and generate production app version.
	$(DOCKER_COMPOSE) run --rm --user=${user}:${group} $(NODE_CONTAINER) npm run prod
watch: ## Start watcher.
	$(DOCKER_COMPOSE) run --rm --user=${user}:${group} $(NODE_CONTAINER) npm run watch
docs: ## Generate docs.
	$(DOCKER_COMPOSE) run --rm --user=${user}:${group} $(NODE_CONTAINER) npm run jsdoc

---------------: ## ------[ Run commands ]---------
run: ## Run container.
	$(DOCKER_COMPOSE) run --rm --user=${user}:${group} ${container} ${command}
exec: ## Execute container.
	$(DOCKER_COMPOSE) exec --user=${user}:${group} ${container} ${command}
run-node: ## Run node container.
	$(MAKE) run container=$(NODE_CONTAINER) command=$(SH)
exec-php-fpm: ## Run node container.
	$(MAKE) exec container=$(PHP_FPM_CONTAINER)
	
---------------: ## ------[ Misc commands ]---------
help: ## Print the list of all available commands with corresponding description.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_-]+:.*?## / {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

## Commands that must always run (prevents from getting 'command is up to date' error).
.PHONY: docs