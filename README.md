# basket-shopping

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Project Description:
App contains two pages, one listing products and other listing cart items.

Product list contains all the available products with their prices and offer.
User can click on 'Add to Cart' button if they wish to buy. On top right corner, Cart icon displays current number of items in the cart. Clicking on it will redirect to Cart list page.
Cart list page divided into two sections, one listing the items added to the cart displai=ying, item details like original price, quantity and total cost per item as per quantity. other section on the right side displays the total of all the cart items after applying offer discounts.

## Steps to clone the repo and Install packages

open terminal and enter below command 

```bash
git clone https://github.com/pavanalaxmi-k/basket-shopping.git
```
navigate to basket-shopping folder, execute below 

```bash
npm install
```
## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
