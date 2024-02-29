<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TMM1SR2295"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TMM1SR2295');
</script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kerneltics</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            background-color: #09042B;
            color: #fff;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1.2rem;
            text-align: center;
            display: grid;
            place-items: center;
            height: 100vh;
            overflow: hidden; /* Hide overflow */
        }
        main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5px;
            position: relative;
            width: 100%;
            overflow: hidden;
        }
        main h1, main p  span{
            animation: 1s ease-out 0s 1 slideInFromLeft;
            opacity: 0;
            animation-fill-mode: forwards;
        }

        main h4,  main a {
            animation: 1s ease-out 0s 1 slideInFromright;

            opacity: 0;
            animation-fill-mode: forwards;
        }
        main h1 {
            animation-delay: 0.3s;
            font-size: 3rem;
        }
        main h4 {
            animation-delay: 0.6s;
            font-size: 1.5rem;

        }
        main p span{
            animation-delay: 0.9s;
            font-size: 3.2rem;
        }
        main a {
            background-color: black;
            padding: 10px 30px;
            border-radius: 5px;
            color: #fff;
            font-size: 2rem;
            text-decoration: none;
            animation-delay: 2.2s;
            margin-top: 20px;
            transition: .3s ease-in-out;
        }
        a:hover {
            background-color: #c2c2c2;
            color: #000;
        }


        @keyframes slideInFromLeft {
            0% {
                transform: translateX(-100%);
                opacity: 0;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideInFromright {
            0% {
                transform: translateX(100%);
                opacity: 0;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }
        #animated-text {
            text-align: center;
            width: 100%;
        }



        #animated-text span {
            display: inline-block; /* Allows individual animation */
            opacity: 0;
            animation: slideInLetter 0.5s ease forwards;

        }

        @keyframes slideInLetter {
            0% {
                transform: translateX(-100%);
                opacity: 0;
            }
            100% {
                transform: translateX(0);
                opacity: 1;
            }
        }




    </style>
    <script>
        document.addEventListener('DOMContentLoaded', (event) => {
            const letters = document.querySelectorAll('#animated-text span');
            let delay = 1100; // Starting delay for the first letter

            letters.forEach((letter, index) => {
                // Set the animation delay for each letter
                letter.style.animationDelay = `${delay}ms`;
                delay += 250; // Increment delay for each letter
            });

        });

        j
        ////jh
    </script>
</head>
<body>
    <!-- company software -->
    <main>
    <h1>Kerneltics</h1>
    <h4>Technology company</h4>
    <p id="animated-text" >
        <span>S</span><span>o</span><span>o</span><span>n</span><span>.</span><span>.</span><span>.</span>
    </p>
    <!-- <p id="animated-text"><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span><span>.</span></p> -->

    <a href="https://twitter.com/kerneltics/">Kerneltics Account</a>

    </main>

</body>
</html>
