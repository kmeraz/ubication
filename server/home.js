export default function(initialState) => (
    
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> 

<html class="no-js"> <!--<![endif]-->
    <head>
        <title>Ubication</title>

        <!-- meta -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <!-- stylesheets -->
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>  
        <link rel="stylesheet" href="./dist/bundle.css" media="screen" title="no title" charset="utf-8">

        <link rel="shortcut icon" type="image/png" href="/assets/images/compassicon.png"/>

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    </head>
    <body id="app">
     
    </body>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
       
        </script>
        <script src="https://use.fontawesome.com/8be68c5575.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js"></script>
        <script src="./dist/bundle.js" ></script>
        
</html>

);