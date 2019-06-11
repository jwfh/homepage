.SUFFIXES: .tex .pdf
TEX=latexmk
TEXFLAGS=-lualatex
PDFS= \
	resume.pdf \

all: $(PDFS)

.tex.pdf: $< .PHONY
	$(TEX) $(TEXFLAGS) $<

clean: .PHONY 
	rm -f *.{log,out,fls,fdb_latexmk,aux,blg,idx,ind}

veryclean: clean
	rm -f *.{pdf,ps,dvi,dat}

.PHONY:


