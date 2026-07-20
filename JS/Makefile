IMAGE := node-dev
CONTAINER ?= dev

.PHONY: build start shell stop

build:
	docker build -t $(IMAGE) .

start:
	docker run -d \
		--name $(CONTAINER) \
		-v "$(PWD):/work" \
		-w /work \
		$(IMAGE) \
		-c "sleep infinity"

shell:
	docker exec -it $(CONTAINER) bash

stop:
	docker rm -f $(CONTAINER)