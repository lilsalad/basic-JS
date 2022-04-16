const { hash } = window.location;
const message = atob(hash.replace('#',''));

if(message){
    document.querySelector('#msg-form').classList.add('hide');
    document.querySelector('#msg-show').classList.remove('hide');
    document.querySelector('h1').innerHTML =message;
}


document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#msg-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#msg-input');
    const encrypted = btoa(input.value);

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select(); 
    
    
});