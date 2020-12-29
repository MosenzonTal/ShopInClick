# ShopInClick -

<p align="center">
  <img src="https://repository-images.githubusercontent.com/302087380/0b926100-08d9-11eb-865f-8a03c6e9d770" width="1050" title="hover text">
</p>


### An Inventory Management application - ###

A web app store which supports different operations which simulating proccess of buying products online until the checkout stage.<br>
ShopInClick Is a web app store which supports different operations which simulating proccess of buying products online until the checkout stage. 
The application allows the viewing and managing a list of items in an inventory. It allows simple actions such as adding new items, updating item details, deleting an item, and controlling each item count with withdrawal and deposit operations. The app consists of a backend system serving APIs and a web frontend displaying the items and allowing the user to perform the different actions. 

## Back-End ##

the server listens to port 3000 and expose the following <br>
 ● REST APIs :<br> 
○ Get All products - Returns a list of all items in the inventory. <br>
○ Get Single Product By ID - Find item by ID and return the item details from the inventory. <br>
○ Update Cart Items - update the number of items in the cart. <br>
○ Add Product to Cart - Add a new item to the cart. <br>
○ Remove Product - remove item from cart.<br>
○ Calculate Total – calculate the sum of the products in cart. <br>

Each item include the following properties:<br>
● id - unique id for the item<br>
● name – string<br>
● description - string <br>
● count - positive integer number<br>

## Front-End ##
Built on the use of an Angular project for the front-end of the application, with Bootstrap for styling. <br>
The app include one dashboard page to display the list of inventory items with basic information, and a mechanism to add new items. <br>
From this list, the user should be able to perform simple actions on specific items such as deleting items, updating items, and withdrawing or depositing items to update their count.


## built on a Stack of:

#### BackEnd: NodeJS, connected to MySQL database, TypeScript

#### FrontEnd: Angular 10, Bootstrap v4.4.1, HTML, CSS, JavaScript

-----------------------------------------

#### in the backend server run nodemon ./bin/www
To make the server run

#### in the front end run ng serve / npm start.
Navigate to http://localhost:4200/. The app will automatically load the page.

<p align="center">
  <img src="https://i.ibb.co/3B9VJh5/58a06230-134c-41ff-bb8f-636b479350ec-200x200.png" width="250" title="hover text">
</p>

<p align="center">
   <b>~҉ ҉~҉   🎀 © Tal Mosenzon  🎀  ~҉ ҉~҉</b>
</p>

