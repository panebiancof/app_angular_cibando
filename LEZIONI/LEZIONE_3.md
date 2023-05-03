# Lezione 3 - 02/05/2023

## 1.NVM
Node Version Manager (Node) 
https://github.com/coreybutler/nvm-windows -->
https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-setup.exe

>nvm -version

nvm install 16 (mette l'ultima versione possibile della 16)
Se uso angular 10 (versione precedente) utilizza Node 11.

Possiamo avere due progetti per due clienti diversi che usano versioni diverse:
-Angular 15 usa una versione specifica
-Angular 9 idem

Per installare diverse versioni di Node e gestirle uso NVM

## 2 Node.js

Installare Node.js

## 3 NPM 
In automatico si installa in modo automatico il software NPM (node package manager)

## 4 CLI Angular 
Installiamo a livello globale la CLI Angular (Command Line Interface), ogni versione di Node.js ha la sua CLI.
Angular è un framework opensource (è l'evoluzione di angular JS). Inizialmente sviluppato da google.
Da Angular 2 è subentrato Typescript che è tipizzato e ci aiuto a vedere gli errori.
Una volta che completo il mio typerscript viene compialto e genera un JS. Si basa sul concetto di COMPONENTI e MODULI
Un Componente è paragonabile ad una pagina per fare un esempio. E' suddiviso in 3 macroaree che devono starci sempre:
- file.html
- file.css
- file.ts

Quindi abbiamo un insieme di componenti,diciamo 5. Tutto l'insime di questi componenti è 1 modulo.
Dentro al modulo abbiamo uno o più SERVIZI. Sono l'ultimo strato porima di arrivare al Back.end (DB).

>npm install -g @angular/cli

Qui https://www.npmjs.com/ trovo tutti i pacchetti installabile dalla cli

>ng v

mostra la versione di angular che ho. Poi eseguo il comando per abilitare i permessi del terminale:

>Set-ExecutionPolicy RemoteSigned

## 5 Nuovo progetto Angular
>ng new cibando

così facendo crea uno scheletro preimpostato minimo già funzionante. Avviamo la nostra app in due modi:

>ng serve (poco usato)

oppure

>npm start
