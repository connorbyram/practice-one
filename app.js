document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const form = document.querySelector('.form-container');
    const demoBtn = document.querySelectorAll('.demo');
    const close = document.querySelector('.close');

    const colorBtn = document.getElementById('bgc');
    const hero = document.querySelector('.hero');

    colorBtn.addEventListener('click', function() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        hero.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

    demoBtn.forEach(function(button) {
        button.addEventListener('click', function(evt) {
            evt.preventDefault();
            modal.classList.add('show')
            setTimeout(function() {
                form.classList.add('translate');
            }, 1); 
        })
    });
    
    close.addEventListener('click', function(evt) {
        evt.preventDefault();
        form.classList.remove('translate');
        setTimeout(function() {
            modal.classList.remove('show')
        }, 100); 
    })
});