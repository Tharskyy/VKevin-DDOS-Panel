// src/script.js
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('ddosBtn');

    btn.addEventListener('click', () => {
        if (btn.classList.contains('processing')) return;

        btn.classList.add('processing');
        btn.textContent = 'ATTACKING...';

        // Simulate attack duration (you can change or remove this)
        setTimeout(() => {
            btn.classList.remove('processing');
            btn.textContent = 'DDOS';
        }, 5000);
    });
});