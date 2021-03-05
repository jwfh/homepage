all: install-deps
	gatsby build
	(cd '${.CURDIR}/public' && tar cJvf ../homepage.txz .)

install-deps:
	yarn install
