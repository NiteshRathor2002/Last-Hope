const toggle=document.querySelector('.togglebtn');
const menu=document.querySelector('.dropdown-menu');
const hello=document.querySelector('#cross'); 
const loginpage=document.querySelector('.login-page');
const loginsection=document.querySelector('.login-section'); 
 const loginpageresponsive=document.querySelector('.dropdown-page-responsive');
const logindropdown=document.querySelector('.login-section');
const loginclose=document.querySelector('#login-close'); 
const Enter=document.querySelector('.enter'); 
const signup=document.querySelector('#hell');
const signupclose=document.querySelector('#signup-close');
const Enter12=document.querySelector('#enter12');
const Login12=document.querySelector('.login');
toggle.onclick=() => {
    menu.classList.add('active');
}
hello.onclick=() => {
    menu.classList.remove('active');
}

loginpage.onclick=() => {
    loginsection.classList.add('active');
   

}
loginclose.onclick=() => {
    loginsection.classList.remove('active');
}
loginpageresponsive.onclick=() => {
    loginsection.classList.add('active');
}
Enter.onclick=() => {
    signup.classList.add('active');
   
    
}
signupclose.onclick=() => {
    loginsection.classList.remove('active');

}
Enter12.onclick=() => {
signup.classList.remove('active');
loginsection.classList.add('active');

}
