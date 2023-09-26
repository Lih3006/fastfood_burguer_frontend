# Kenzie Burger


This is the Kenzie Burger project, developed in React and deployed on Vercel. Kenzie Burger is a system for a burger restaurant that allows customers to view the menu, add items to their cart, and place orders online.


## About the Project

Kenzie Burguer uses the Kenzie Burguer API. The API documentation can be found at [link_to_api_documentation](https://github.com/Kenzie-Academy-Brasil-Developers/hamburgueria-kenzie-version-2/).

### Cart Management

The logic has been implemented to add and remove items from the cart, as well as calculate totals. Unlike the previous delivery, cart items come directly from the product list provided by the API.

In this stage, the use of `useEffect` is crucial to persist cart data in localStorage, ensuring that cart items remain even after page refresh.

### Modal

A simple open-and-close behavior has been implemented for a modal, using conditionals in JSX to control its visibility.

### Context

Contexts, such as UserContext and CartContext, have been created to avoid the prop drilling problem. This makes it easy to share important information throughout the application.

### Features

The project includes features such as login, user registration, route protection, use of react-hook-form, and others that may be deemed necessary for the user experience.


## How to Use


1. Clone this repository:

git clone https://github.com/your-username/kenzie-burger.git

markdown
Copy code

2. Install dependencies:

npm install

markdown
Copy code

3. Start the application:

npm start

css
Copy code

4. Open the application in your browser to access the Kenzie Burger system.
