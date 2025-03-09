##  instructions on how to set up and run the project.

# Angular 13 Project with Mock JSON Server

This is an Angular 13 project that uses a mock `json-server` for simulating backend API calls with a `db.json` file.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Angular CLI](https://angular.io/cli) (to install via npm: `npm install -g @angular/cli`)

## Setup Instructions

1. **Clone the Repository**  
   First, clone the project to your local machine:

   ```bash
   git clone https://github.com/MalashreeMaliPatil/Event-Management-System
   cd Event-Management-System
 2. **Install Project Dependencies**
   npm install
  

 3. **Install json-server**
  npm install -g json-server

 4. **Start the Mock Server**
json-server --watch db.json --port 3000

# EventManagementApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
