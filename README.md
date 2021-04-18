
![alt text](https://github.com/apiwatdev/scg-drinking-vending-machine/blob/master/design/machine.PNG?raw=true)

# ODrink (Drinking Vending Machine)

## Project structure
- front-end 
  - admin-system (NuxtJs)
  - machine (NuxtJs)
- back-end
  - api (NestJs)
- database 
  - In-memory
## Design (Mobile)
> Admin System for manage machine and product

> Drinking Vending Machine for Buy a drinking
#### Admin System
![alt text](https://github.com/apiwatdev/scg-drinking-vending-machine/blob/master/design/admin-system.PNG?raw=true)

#### Drinkg Vending Machine
![alt text](https://github.com/apiwatdev/scg-drinking-vending-machine/blob/master/design/machine.PNG?raw=true)

## Feature
- [x] Customer can buy product from vending machine.
- [x] When they buy any product, the numbers of product should be decrease from the machine
- [x] System admin : know all vending machine locations
- [x] When existing product quantity is less than 10, the vending machine will send any signals to the system admin(email).
- [ ] System admin : show salse chart
- [ ] System admin : CRUD Machine and Product

## Set Up
#### Set up key
Set up SMTP Gmail at  backend/api/.env

[Enabled less secured app ](https://myaccount.google.com/lesssecureapps")
```
SMTP_GMAIL_USER=
SMTP_GMAIL_PASS=
```
Set up user at backend/data/users.json
```
[
  {
    "username": "admin",
    "password": "admin+1234",
    "email": "YOUR_EMAIL_NOTI" // email for recive noti alert after product is less 10
  }
]

```
Set up google map key at /frontend/admin-system/.env
```
GMAP_KEY=GOOGLE_MAP_API_KEY
```
#### Install 
 ```javascript 
npm install 
npm install  --prefix ./backend/api
npm install  --prefix ./frontend/admin-system 
npm install  --prefix ./frontend/machine
```
## Start Project
back to main project
 ```javascript 
npm run dev
```
goto website
> admin system : http://localhost:3000/
> 
> machine :http://localhost:8000/

 
