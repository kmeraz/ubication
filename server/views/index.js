/*
Server-side rendering prevents the client from viewing sensitive user information.
Necessary user information (first name, last name, picture, id) is passed
to the initial state of the app on the client side, if the user is logged in.
Note:
- The entry React components (Provider, App) are injected into the page.
- The initialState of the app is saved in window.__INITIAL_STATE__.
http://redux.js.org/docs/recipes/ServerRendering.html
*/


const renderFullPage = (initialState) => {

  return `
    <!DOCTYPE html>

    <html class="no-js"> <!--<![endif]-->
      <head>
        <title>Ubication</title>

        <!-- meta -->
        <meta charset="utf-8">
        
        <!-- stylesheets -->
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>  
        <link rel="stylesheet" src="/dist/bundle.css" media="screen" title="no title" charset="utf-8">

        <link rel="shortcut icon" type="image/png" href="/assets/images/compassicon.png"/>
      </head>
      <body>
        <div id='app'>
        </div>
        
        <script>
       
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
       <script src="https://use.fontawesome.com/8be68c5575.js"></script>
       <script src="https://maps.googleapis.com/maps/api/js"></script>
       <script src="/dist/main.bundle.js" ></script>
      </body>
    </html>

  `;
};

export default renderFullPage;
