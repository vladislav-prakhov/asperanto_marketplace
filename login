<html lang="en"><head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">


    <title>Авторизация</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <style>
        html,
        body {
            height: 100%;
            background-color: #c5c5c5;
        }

        .nav-icons {
            font-size: 1.7rem;
        }

        .main-icons {
            font-size: 5rem;
        }

        .border-l {
            border-left: 1px solid rgba(0,0,0,.1);
        }

        .border-r {
            border-right: 1px solid rgba(0,0,0,.1);
        }

        .border-t {
            border-top: 1px solid rgba(0,0,0,.1);
        }

        .card-main-menu {
            margin-right: 7rem;
            margin-left: 7rem;
            border: 3px solid #343a40;
            background-color: #ddd;
        }

        .btn-role {
            border: 3px solid #343a40;
            border-radius: 0px;
            background-color: #fff;
        }

        .btn-icon {
            font-size: 30px;
        }

        .btn-text-role {
            font-size: 1.2rem;
        }

        .contain {
            margin-right: -15px;
            margin-left: -15px;
        }

        button:active,
        a:active {
            text-decoration: none !important;
            box-shadow: none !important;
        }

        button:focus,
        a:focus {
            text-decoration: none !important;
            box-shadow: none !important;
        }

        button {
            text-decoration: none !important;
        }

        button:hover
        a:hover {
            text-decoration: none !important;
            box-shadow: none !important;
        }

        @media (max-width: 1200px) {
            .card-main-menu {
                margin-right: 2rem;
                margin-left: 2rem;
                border: 3px solid #343a40;
                background-color: #ddd;
            }
        }

        @media (max-width: 767px) {
            .main-icons {
                font-size: 4rem;
            }

            .mobile-h3 {
                font-size: 1.7rem;
            }

            .mobile-h5 {
                font-size: 1.15rem;
            }

            .card-main-menu {
                margin-right: 0rem;
                margin-left: 0rem;
                border: 3px solid #343a40;
                background-color: #ddd;
                border-radius: 0px;
            }

            .btn-icon {
                font-size: 26px;
            }

            .btn-text-role {
                font-size: 1.1rem;
            }
        }

        @media (max-width: 575px) {
            .main-icons {
                font-size: 2.75rem;
            }

            .mobile-h3 {
                font-size: 1.5rem;
            }

            .btn-icon {
                font-size: 23px;
            }

            .btn-text-role {
                font-size: 1rem;
            }
        }

        @media (min-width: 768px) {
            .arrange {
                width: auto !important;
            }

            .search_w {
                width: 60% !important;
            }

            .links {
                display: flex !important;
                height: 100% !important;
            }
        }
    </style>
</head>
<body>
<header class="navbar bg-light py-2 flex-column flex-md-row mb-3 mb-md-0">
    <div class="d-flex flex-row justify-content-between w-100 arrange">
        <button class="d-flex d-md-none btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#fastFunc">
            <i class="text-dark fas fa-bars nav-icons"></i>
        </button>

        <a class="navbar-brand text-dark" href="#">
            Asperanto
        </a>

        <a class="text-dark d-flex d-md-none mt-2">
            <i class="fas fa-user nav-icons"></i>
        </a>
    </div>

    <div class="row search_w d-none d-md-flex">
        <form class="form-inline d-flex align-items-center w-100" action="" method="get">
            <input type="search" placeholder="Найти" class="form-control ds-input d-inline-block w-50 flex-grow-1">
            <button type="button" class="btn btn-light"><i class="fas fa-search icons"></i></button>
        </form>
    </div>

    <a class="text-dark d-none d-md-flex" href="#">
        <i class="fas fa-user nav-icons"></i>
    </a>
</header>

<div class="container-fluid h-100">
    <div class="row">
        <form class="col-12 d-flex d-md-none px-0 mb-3 mb-md-0 border-t">
            <input type="search" placeholder="Найти" class="form-control ds-input d-inline">
        </form>
    </div>

    <div class="row h-auto links">
        <div class="col-12 col-md-3 col-xl-2 collapse w-100 links px-0" id="fastFunc">
            <div class="bg-light border-t border-r py-3 px-0 h-auto w-100">
                <h6 class="pl-3">Быстрый функционал</h6>
            </div>
        </div>

        <main class="col-12 col-md-9 col-xl-10 border-t border-l" role="main">

            <div class="q2"><h2><p>Авторизация</p></h2>
                <form action="https://echo.htmlacademy.ru" method="post">
                    <label for="1">Имя пользователя:</label>
                    <br>
                    <input id="1" name="log" type="text">
                    <br>
                    <label for="2">Пароль:</label>
                    <br>
                    <input id="2" name="pass" type="password">
                    <br>
                    <input type="submit" value="Войти">


                </form></div>




        </main>
    </div>
</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
</body></html>