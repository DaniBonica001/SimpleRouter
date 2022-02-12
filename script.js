let app_div = document.getElementById('app');
let routes = {};
let templates = {};

const home = () => {
    let div = document.createElement('div')
    let link = document.createElement('a');
    link.href = '#/about';
    link.innerText = "About";


    div.innerHTML = "<h1>Home</h1>"
    div.appendChild(link);
    
    app_div.appendChild(div);
}