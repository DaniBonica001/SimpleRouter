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

function about() {  
    
    let nt = document.createElement('div');
    let link = document.createElement('a');     
    
    link.href = '#/';
    link.innerText = 'Home';

    nt.innerHTML = '<h1>About</h1>';
    nt.appendChild(link);//Añade el link creado al div     
};

const route = (path, template) => {
    if (typeof template === 'function') {
        return routes[path] = template;
    } else if (typeof template === 'string') {
        return routes[path] = templates[template]
    } else {
        return;
    }
}

function template (name, templateFunction) {
    return templates[name] = templateFunction;
};

/*
* Map a template to a route
*/
template('home', function(){
    home();
});

template('about', function(){
    about();
});