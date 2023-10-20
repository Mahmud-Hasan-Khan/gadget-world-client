# Gadget World
   Electronic Gadget Online Shop web app build with React(Vite) Application, where used React Router DOM & Firebase for Authentication. Express used for Backend server & MongoDB use for Database.
## Project features
-  Home page have a `Navbar`, `Banner`, `6 types of brand names` ,  `Footer` `Navbar` `with Active Route`.

- The Services section have `6 event services`. Each service have a relevant name, image, price, short description and `View Details` button.

- On clicking `View Details` button, the user will be redirected to the `Service Detail` page. That display detailed information of the service.

- The `navbar` have `website name` with `logo`, `Home`, `Add Product`, `My Cart`, and `Login`

 - This web app implemented `Email and password based Authentication`. User can the Registration and the login. Users can toggle between Login and Registration view.

 - On the Registration page, display errors when:

        The password
        is less than 6 characters
        don't have a capital letter
        don't have a special character

- On the Login page, display errors when:

        - password doesn't match
        - email doesn't match


- Also, implemented  `one extra login` which is  `Google`.

- After `Successful logged` in user show's a `toast`.

- Once logged in, the user name, profile picture and the logout button appear on the header.

- If the user clicks on the `Logout` button on `Navbar`, log him/her out.

- Added two more routes `Top Selling Product` & `Payment Methods`. These two routes will be private.

- `404 page` implemented. 
- `Add Product` route user can add new product and it's saved into database.

- On clicking a `brand` will redirect the user to the page having products based on that brand. On that page, there also have slider with 3 advertisement images and at least 4 products. 

- Each product card have:
   - Image
   - Name
   - Band Name
   - Type
   - Price
   - Rating
   - Details button
   - Update button

- Among these six brand types, one of them will not have any available products.User shows a relevant message on brand page to inform the users.

- Clicking on the `Details button` the user redirect to the product detail route. Each route have detailed information of the product.. User can add the product by clicking the `Add to Cart` button.

- on `My Cart` page where a user will see all his/her added products. If the user wants, he/she can delete a product.

-   `Add Product` ,  `My Cart` is a `Protected Route`.

- Clicking on the `Update button` user cad update existing product. It's also `Protected Route` 

## Live Site Link
- [Click Here to Open Live Site](https://gadget-world-b1b2a.web.app/)

## Screenshots

![App Screenshot](https://i.ibb.co/0sHCmnn/screencapture-gadget-world.png)