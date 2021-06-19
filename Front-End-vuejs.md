> **WE ARE HIRING:** [Apply Now](https://www.knawat.com/career/).

# Front-End Developer

## Introduction

This challenge expects you to build a simple online shopping page, with a basic cart functionality, using Vuejs as the main front-end framework. And fetch products from a Knawat store.

## Getting Started

You can start by checking [Knawat documentation](#knawat-documentation) <br>
You can create a new store instance our use [the testings store credentials](#the-testing-store-credentials)

### Knawat documentation

- Knawat MP API: `http://docs.knawat.io/`
- Knawat MP SDK: `https://github.com/Knawat/Knawat-NPM-JavaScript-SDK`
- Development base url: `https://dev.mp.knawat.io/api`

### The testing store credentials:

- "URL": `https://demostore.knawat.com/`
- "consumer_key" : `749d9378-3a69-4fbc-8b38-489df242887d`
- "consumer_secret" : `8c7363bc-d4ac-4367-97e4-ae8cb1c7a432`

## Functionality:

- A simple page with a list of products, pagination, and a navbar
  - `Navbar`
    - Has an cart-icon
    - Cart-icon has a badge with the cart items count
    - When click on cart-icon, display a dropdown-menu with the current cart products
    - If there is no products in the cart, show "Cart is empty"
    - Show a checkout button

  - `Pagination`
    - Able to navigate between pages

  - `Products list`
    - List of 10 products fetched from the current store products

- A simple cart page
  - User can list all of his products
  - User apply to remove a product from the cart

## Evaluation criteria:

Layout should be responsive showing desktop version for resolutions greater than or equal to 960 px and mobile version for resolutions below 960.

In addition to the functionality, we will also evaluate the code style, code structure, project documentation, tests, Git messages, code linting, and ease of setup.

- The design must have a valid/semantic HTML5.
- Pick any simple design, that fulfills functionalities
- Using Vuejs 3.x or 2.x is mandatory
- Using Typescript 4.x is mandatory
- Using [Knawat MP SDK](https://github.com/Knawat/Knawat-NPM-JavaScript-SDK) is mandatory
- Using SSR is plus

## How to submit?

Clone this repo and create a pull request once you feel the code is ready.

## Knawat Tech Stack Includes:

- [Vuejs](https://vuejs.org/)
- [Meteor](https://www.meteor.com/)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Vue-meteor](https://github.com/meteor-vue/vue-meteor)
- [Vuex](https://vuex.vuejs.org/)
- [Vue-router](https://github.com/vuejs/vue-router)
- [Vue-meta](https://github.com/meteor-vue/vue-meteor/tree/master/packages/vue-ssr)
- [Vuetify](https://vuetifyjs.com/en/)
- [Pugjs](https://pugjs.org/)
- [Stylus](http://stylus-lang.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
