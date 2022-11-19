run_db:
	docker build . -t plpg 
	docker run -d -e POSTGRES_PASSWORD=1234 -p 5432:5432 --name plpg plpg 
start:
	python -m http.server 8080