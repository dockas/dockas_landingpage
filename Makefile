PHONY: compile watch

All: compile

compile:
	./node_modules/.bin/gulp

watch:
	./node_modules/.bin/gulp watch


dev: watch
