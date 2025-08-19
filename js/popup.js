/*const readMoreButtons = document.querySelectorAll('.read-more');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
*/

/*const readMoreButtons = document.querySelectorAll('.read-more');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';

        // Fetch the content URL from the 'data-url' attribute
        const contentUrl = button.getAttribute('data-url');

        // Use an iframe to display the content
        const iframe = document.createElement('iframe');
        iframe.src = contentUrl;
        iframe.width = '640';
        iframe.height = '480';

        // Replace the existing iframe with the new one
        const existingIframe = modalContent.querySelector('iframe');
        if (existingIframe) {
            modalContent.replaceChild(iframe, existingIframe);
        } else {
            modalContent.appendChild(iframe);
        }
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});*/

/*const readMoreButtons = document.querySelectorAll('.read-more');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content');
const titleElement = modalContent.querySelector('h2');
const descriptionElement = modalContent.querySelector('p');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';

        // Fetch the content URL from the 'data-url' attribute
        const contentUrl = button.getAttribute('data-url');

        // Use an iframe to display the content
        const iframe = document.createElement('iframe');
        iframe.src = contentUrl;
        iframe.width = '100%';
        iframe.height = '480';

        // Update the title and description elements with the values from the 'data-title' and 'data-description' attributes
        titleElement.textContent = button.getAttribute('data-title');
        descriptionElement.textContent = button.getAttribute('data-description');

        // Replace the existing iframe with the new one
        const existingIframe = modalContent.querySelector('iframe');
        if (existingIframe) {
            modalContent.replaceChild(iframe, existingIframe);
        } else {
            modalContent.appendChild(iframe);
        }
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});*/
const readMoreButtons = document.querySelectorAll('.read-more');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content');
const titleElement = modalContent.querySelector('h2');
const descriptionElement = modalContent.querySelector('p');
readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block'; // Fetch the content URL from the 'data-url' attribute 
        const contentUrl = button.getAttribute('data-url'); // Use an iframe to display the content 
        const iframe = document.createElement('iframe');
        iframe.src = contentUrl; iframe.width = '100%';
        iframe.height = '480'; // Update the title and description elements with the values from the 'data-title' and 'data-description' attributes 
        titleElement.textContent = button.getAttribute('data-title');
        descriptionElement.textContent = button.getAttribute('data-description'); // Replace the existing iframe with the new one 
        const existingIframe = modalContent.querySelector('iframe');
        if (existingIframe) {
            modalContent.replaceChild(iframe, existingIframe);
        }
        else {
            modalContent.appendChild(iframe);
        }
    });
});
closeButton.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', event => { if (event.target === modal) { modal.style.display = 'none'; } }); // Initialize AOS after the modal code 
document.addEventListener("DOMContentLoaded", function () { AOS.init(); });
