## FactoryPal Code Challenge

This app is built for FactoryPal as a code challenge for a Front-End position.

### Challenge

Develop a UI for the metrics data supplied.

Typically, the metric data are served from a microservice over HTTP.
A UI for such data is typically composed of a chart and a table. The chart and the table are linked which each other in the sense that, when the user interacts with, let’s say the chart, then the table might react in some way.
You are free to choose how you want to tackle this challenge. We recommend you follow the above suggestion with the chart and table, but feel free to go for a different design if you feel confident and creative. We will be rating different aspects of your solution, not just the GUI, so make sure you address what you think it is important.

### Structure

The app has the following structure:

```
public/
 ├── assets/
 └── index.html
src/
 ├── components/ ................. the app building blocks
 │   └── ...
 │-- hooks/ ...................... custom Hooks
 | -- icons/ ...................... contains svg icons
 │-- providers/ .................. custom Providers
 │   └── ...
 |-- utils/ ...................... utility functions
 |   └── ...
 ├── theme/ ...................... the theme for the application
 │   ├── colors.js
 │   ├── global.js
 │   ├── typography.js
 │   └── index.js
 ├── App.tsx ..................... the main component of the app
 ├── API.ts ...................... simulation of an API call
 ├── fakeData.ts ...................... the given data for the exercise
 ├── index.tsx ................... app entry point
 ├── setupTests.ts ............... setting up the testing library
 ├── types.ts .................... the types that are used in this app
```

### Technologies Used

#### Create React App
A simple way to setup React without having to configurate Webpack.

#### TypeScript
Decided to use TypeScript so it's easy to find and fix type errors.

#### Styled Components
Easy way to make visual changes by using JavaScript.

#### React Vis
A composable chart library created by Uber