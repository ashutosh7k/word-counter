# Word Counter - My Project for Invictus hiring challenge
Check the deployed application at https://young-hamlet-60481.herokuapp.com/

# Components Explaination

### 1. App
This component renders the header and the form. <br>
Form takes an input **N** and fetches the data from the given [link](https://raw.githubusercontent.com/invictustech/test/main/README.md).<br>
Used axios to make a get request.<br>
After getting the data from the link it passes it as a prop to the second component CreateTable.

### 2. 
This components takes text **data** and **N** as a prop and then creates a Map with word as key and their frequency as value.<br>
After creating the Map it sorts it in descending order and slices it from 0 to N.<br>
Then passes it to the Table components of Material UI to render the data as a table on webpage.

# Libraries/plugins used

### 1. Axios
Axios is a package which allows us to make requests to apis.<br>
Used axios to fetch data form the given link.

### 2. Material UI
Material-ui is a package to use googles material ui designed features in react.<br>
Created table with Material UI in the application.

# Installation Steps

### `npm i`

Installs all the libraries that have been used in the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

