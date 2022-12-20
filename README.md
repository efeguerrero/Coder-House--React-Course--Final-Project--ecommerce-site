# Coder-House React Course E-Commerce Project

E-commerce site done as the final project for the React Course in Coder-House in 2022.

# What did I use?

- React
- React-Router V6.4 library
- HTML5/CSS3
- Javascript
- Firebase/Firestore Database (As a database for product catalogue and also to post orders and manage stock)

# User Functionality

- Site is 100% responsive
- Navigate through our product list and filter by category
- View product detail, images, info and stock by clicking on each product and accesing its detail page
- Add or remove products to cart.
- Check Cart from anywhere on the site to view current items added, remove items and see your total amount.
- Cart is persistent through out sessions
- CheckOut form to fill your personal information and receive your Order ID (Generated through firebase)

# Developer/Administrator Functionality

- Product catalogue fetched from FireStore Database
- Images stored and fetched from Firebase Storage
- Confirmed orders by customers are added to Firebase under "Oders" Collecion with all the necesarry information to process (Buyer personal information , Items and quantities bought, date and order total amount)
- After orders are added to firestore database, each product stock is updated to reflect last sale.

## Para ver el proyecto:

[![App](https://img.shields.io/badge/App-informational?style=for-the-badge&logo=netlify&logoColor=fff&color=23272d)](https://changas-store-react.netlify.app)

## Para ver demo del proyecto:

https://loom.com/share/628b81d06ee646f09e7dbe1f5bf7ba67

## Para poder clonar y usar el proyecto

### Seguir los siguientes pasos:

- Clonar el repositorio de GitHub:

  ```bash
  git clone https://github.com/rediberry/Coderhouse-ReactJS-final-project-Shopping-cart.git
  ```

- cd dentro del directorio de la carpeta:

  ```bash
  cd Coderhouse-ReactJS-final-project-Shopping-cart
  ```

- Instala las dependencias.

  ```bash
  npm install
  ```

- Para correr el proyecto:

  ```bash
  npm run dev
  ```

# PS:

Stefanos Deco is a real project! You can check it out at @stefanosdeco in instagram.
