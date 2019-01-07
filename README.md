## Как создавать новые страницы
    
#### Вот это должно быть в теге <head>
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Roboto+Condensed" rel="stylesheet">
    
    <!-- Линки на свои .css файлы -->
    
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    
    <title>Название страницы</title>
    
#### Это должно идти после тега <body> (то есть после <\body>)
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="../js/templatesLoad.js"></script>
    
#### Тег <body> должен выглядеть вот так

    <body>
        <div id="navBar"></div>
    
        <div class="page-container">
            <div id="sideBar"></div>
        
            <main class="main" role="main">
        
                <!-- тут код страницы -->
        
            </main>
        </div>
    </body>