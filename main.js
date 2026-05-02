document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 2. Parallax Background Subtle Effect
    const bgMesh = document.querySelector('.bg-mesh');
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    document.addEventListener('mousemove', (e) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 20;
        targetY = (e.clientY / window.innerHeight - 0.5) * 20;
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

    // 3. Scroll Reveal for Editorial Content
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.feed-item, .sidebar-widget, .section-title, header > div > *');
    revealElements.forEach((el, index) => {
        el.classList.add('reveal-init');
        el.style.transitionDelay = `${(index % 2) * 0.1}s`;
        observer.observe(el);
    });
});
