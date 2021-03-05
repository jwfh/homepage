all: install-dep
	gatsby build
	(cd '${.CURDIR}/public' && tar cJvf ../homepage.txz .)

install-dep:
	yarn install
