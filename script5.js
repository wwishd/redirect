// script5.js (Add Button)
const button = document.createElement('button');
button.textContent = 'External Button';
button.onclick = function() {
    alert('External button clicked!');
};
document.body.appendChild(button);