PROJECT="Game Interface Flows Clinet"

docker_build:
	docker image build -t game-interface-flows-frontend .

docker_run:
	docker run -p 3000:3000 game-interface-flows-frontend 