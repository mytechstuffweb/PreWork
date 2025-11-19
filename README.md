- Application repository - https://github.com/mytechstuffweb/PreWork
- Application is built using react 19.2.0 and vite 7.2.2
- Application is deployed using GitHub Pages
- to run application locally run following commands:
    - npm install
    - npm run dev
- application will start on vite default port 5173
- if that port is already in use, vite will try next up port number
- port number finally assigned to the app will be shown at the end of "npm run dev" run

Main functionality:
- Application is using Cats API
- On load, there should be:
    - header
    - "Select a breed" button
    - "Images per Page" button - select between 3, 6, and 9; default is 3
    - "Color scheme toggle" button - Dark / Light
    - 3 random cats pictured should be loaded 
    - pictures of the cats with breed should have breed name displayed under picture
    - "Select Images" button
- Click "Select a breed button":
    - 3 images of the selected breed cats should be reloaded
    - Description of the breed should be displayed above the pictures
    - logo-links to Wikipedia, vetStreet, and The Cats Fanciers' association
      should be displayed when available; logo-links will launch a page from related website 
- Click "Images per Page" button:
    - page will display selected number of images, random or images for the selected breed
    - if selected 6 or 9 images - additional "Select Images" button 
      will be displayed under pictures
- Click "Color scheme toggle" button:
    - page will switch to selected color scheme
- Click "Select Images" button:
    - appropriate number of new images will be displayed
