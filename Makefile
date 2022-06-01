services-run:
	docker compose up -d

services-clean:
	docker ps --filter name=swayswap* -aq | xargs docker stop | xargs docker rm -f
	docker volume ls --filter name=swayswap* -q | xargs docker volume rm