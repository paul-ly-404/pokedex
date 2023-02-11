# POKEDEX

This React app with a Nest js backend allows the user to load up a set of 10 cards from a json file and select up to 5 cards into his/her deck. They can then save this deck into local storage where upon refreshing the page, their saved deck will be restored.


Initial page:

![image](https://user-images.githubusercontent.com/125100028/218234326-28c4598b-0352-4839-9c93-ee8ce0968c40.png)


Saved page:

![image](https://user-images.githubusercontent.com/125100028/218234184-dfc33c28-0564-4188-b6d7-a5fa74b92de6.png)


## Starting the backend

In `backend` folder run
```
npm install
npm run start:dev
```

## Starting the frontend

In root folder run
```
npm install
npm start
```


## To clear the saved deck from local storage, run in browser console

```
localStorage.clear()
```


## Design Document
Please look in the wiki for the design documentation or [here](https://github.com/paul-ly-404/pokedex/wiki/Design-Documentation).
