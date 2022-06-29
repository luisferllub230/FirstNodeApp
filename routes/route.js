
const requestHandle = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/' || req.url === '/home' || req.url === '/index.html') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>HOME</title>
            </head>
            <body>
                <header>
                    <ul>
                        <li><a href="/MyValues.html">My values</a></li>
                        <li><a href="/MyProjects.html">My Projects</a></li>
                        <li><a href="/MySkill.html">My Skill</a></li>
                        <li><a href="/contact">Contact with me</a></li>
                    </ul>
                </header>
                <main>
                    <img class="center" src="./assets/img/MyPhoto.jpg" alt="Luis Fernandez's photo">
                    <div class="iam">
                        <h1>I'm Luis Fernandez</h1>
                        <h3>a student software development</h3>
                    </div>
                    <div class="container">
                        <hr>
                        <h2>who I am?</h2>
                        <p>
                            Hi im luis alejandro Fernandez Lluberes, i'm 21 years old, i'm a software developer's student from technological institute of the americas <a href="https://itla.edu.do/" target="_blank">ITLA</a> and live in th National District of Santo Domingo
                        </p>    
                        <br>
                        <h2>what I like?</h2>
                        <p>
                            <ul>
                                <li>Video games</li>
                                <li>cats and dogs</li>
                                <li>Anime</li>
                                <li>swimming</li>
                                <li>IT</li>
                            </ul>
                        </p>
                    </div>
                </main>
                <footer>
                    <p>
                        Contact with me Click <a href="/contact.html">Here</a>  - No Copyright
                    </p>
                </footer>
            </body>
            </html>
        `);
        res.end();
    }else if (url === '/MyProjects' || req.url === '/MyProjects.html') {
        res.setHeader('Content-Type', 'text/html' );
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Projects</title>
        </head>
        <body>
            <main>
                <h1>My Projects</h1>
                <br>
                <div>
                    <h2>SoftwareNomina</h2>
                    <img src="https://user-images.githubusercontent.com/84060723/166086322-eeedd258-74c1-4db7-a98d-63f06b202293.png" alt="softwareNomina's photo ">
                    <p>
                        The purpose of this project was to create a payroll management system for programming materai 2. you can see more about this project clicking <a href="https://github.com/luisferllub230/SotfwareNomina4.0" target="_blank">HERE</a>
                    </p>
                </div>
                <div>
                    <h2>Text edit</h2>
                    <img src="https://user-images.githubusercontent.com/84060723/157458280-cce03918-adc0-4eac-8bda-5aa77a7b79db.png" alt="Text edit's photo ">
                    <p>
                        The purpose of this project was to create a text edit for DCU. you can see more about this project clicking <a href="https://github.com/luisferllub230/TextEditor" target="_blank">HERE</a>
                    </p>
                </div>
                <div>
                    <h2>Calculator</h2>
                    <img src="https://user-images.githubusercontent.com/84060723/152291931-2e93fa72-9cfd-4e04-81ab-db4cff01d5af.png" alt="Calculator's photo ">
                    <p>
                        The purpose of this project was to create a Calculator for DCU. you can see more about this project clicking <a href="https://github.com/luisferllub230/Calculadora" target="_blank">HERE</a>
                    </p>
                </div>
                <a href="/index.html">GO HOME</a>
            </main>
        </body>
        </html>
        `);
        res.end();
    }else if (url === '/MySkill' || req.url === '/MySkill.html') {
        res.setHeader('Content-Type', 'text/html' );
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Skill</title>
        </head>
        <body>
            <!--nota: se que no es eficiente :)-->
            <main>
                <h1>My skills</h1>
                <table>
                    <tr>
                        <td>Skill</td>
                        <td>level</td>
                        <td>Skill</td>
                        <td>level</td>
                    </tr>
                    <tr>
                        <td>
                            html
                        </td>
                        <td>
                            ⭐⭐⭐⭐⭐
                        </td>
                        <td>
                            css
                        </td>
                        <td>
                            ⭐⭐⭐⭐⭐
                        </td>
                    </tr>
                    <tr>
                        <td>
                            bootstrap
                        </td>
                        <td>
                            ⭐⭐⭐
                        </td>
                        <td>
                            javascript
                        </td>
                        <td>
                            ⭐⭐
                        </td>
                    </tr>
                    <tr>
                        <td>
                            aps.net
                        </td>
                        <td>
                            ⭐⭐⭐
                        </td>
                        <td>
                            OOP
                        </td>
                        <td>    
                            ⭐⭐⭐⭐⭐
                        </td>
                    </tr>
                    <tr>
                        <td>
                            MVC
                        </td>
                        <td>
                            ⭐⭐⭐⭐⭐
                        </td>
                        <td>
                            SQL
                        </td>
                        <td>
                            ⭐⭐⭐⭐
                        </td>
                    </tr>
                </table>
                <a href="/index.html">GO HOME</a>
            </main>
        </body>
        </html> 
        `);
        res.end();
    }else if (url === '/MyValues' || req.url === '/MyValues.html') {
        res.setHeader('Content-Type', 'text/html' );
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./assets/css/style.css">
            <title>My values</title>
        </head>
        <body>
            <main>
                <h1>My values</h1>
                <ol>
                    <li>Loyalty</li>
                    <li>Spirituality</li>
                    <li>Honesty</li>
                    <li>Determination</li>
                    <li>Tolerance</li>
                    <li>Attentiveness</li>
                    <li>Kindness</li>
                    <li>Empathy</li>
                </ol>
            </main>
            <a href="/index.html">GO HOME</a>
        </body>
        </html>
        `);
        res.end();
    }else if (url === '/contact' || url === '/contact.html' && method === 'GET') {
        res.setHeader('Content-Type' ,'text/html' );
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact</title>
        </head>
        <body>
            <main>
                <h1>Contact with me</h1>
                <form action="/contact" method = 'POST'>
                    <label for="name">Name: <input id="Name" type="text" placeholder="your name" required></label><br>
                    <label for="lastName">Last Name: <input id="lastName" type="text" placeholder="your last Name" required></input></label><br>
                    <label for="email">Email: <input type="email" placeholder="test@email.com" required></label><br>
                    <label for="description">Description: <br><textarea name="description" id="description" cols="30" rows="10"></textarea></label><br>
        
                    <button type="submit">Send</button>
                </form>
        
                <br>
                <a href="/index.html">GO HOME</a>
            </main>
        </body>
        </html>
        `);
        res.end();
    //}else if (url === '/contact' && method === 'POST') {
    //     const info = [];

    //     req.on('data', (chunk) => {
    //         info.push(chunk);
    //     })
        
    //     req.on('end', () => {
    //         console.log(info);
    //         //parse the data to get the name
    //         const name = Buffer.concat(info).toString().split('=')[1];
    //         res.setHeader('Content-Type', 'text/html');
    //         res.write(``);
    //         res.end();
    //     });

    }else {
        res.write(`
        <html> 
            <head> 
                <title> error </title> 
            </head> 
            <body> 
                <h1>404 do not exits</h1>
                <a href="/index.html">index</a>
            </body> 
        </html>`);
        res.end();
    }
};

module.exports = requestHandle;