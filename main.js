document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 2. Parallax Mesh Background
    const bgMesh = document.querySelector('.bg-mesh');
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    document.addEventListener('mousemove', (e) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 50;
        targetY = (e.clientY / window.innerHeight - 0.5) * 50;
    });

    function animateMesh() {
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;
        if (bgMesh) {
            bgMesh.style.transform = `translate(${currentX}px, ${currentY}px)`;
        }
        requestAnimationFrame(animateMesh);
    }
    animateMesh();

    // 3. Bento Card Mouse Tracking (Light Effect)
    const cards = document.querySelectorAll('.bento-item');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
    });

    // 4. Enhanced Scroll Reveal
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.bento-item, h2, #contact, header > *');
    revealElements.forEach((el, index) => {
        el.classList.add('reveal-init');
        el.style.transitionDelay = `${(index % 3) * 0.1}s`;
        observer.observe(el);
    });
});
