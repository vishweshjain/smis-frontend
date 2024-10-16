let body = document.body;
let profile = document.querySelector('.header .flex .profile');


document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
    seacrhForm.classList.remove('active');
}

let seacrhForm = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () => {
    seacrhForm.classList.toggle('active');
    profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () => {
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}

document.querySelector('.side-bar .close-side-bar').onclick = () => {
    sideBar.classList.remove('active');
    body.classList.remove('active');
}

window.onscroll = () => {
    profile.classList.remove('active');
    seacrhForm.classList.remove('active');

    if(window.innerWidth < 1200){
        sideBar.classList.toggle('active');
        body.classList.toggle('active');
    }
}

let toggleBtn = document.querySelector('#toggle-btn');
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = ()=> {
    toggleBtn.classList.replace('fa-sun' , 'fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode' , 'enabled');
}

const disableDarkMode = ()=> {
    toggleBtn.classList.replace('fa-moon' , 'fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode' , 'disabled');
}

if(darkMode === 'enabled'){

    enableDarkMode();
}
toggleBtn.onclick = (e) => {
    let darkMode = localStorage.getItem('dark-mode');
    if(darkMode === 'disabled'){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
}