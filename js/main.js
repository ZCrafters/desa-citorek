// Initialize Chart.js for tourism cost comparison
function initTourismCostChart() {
    const ctx = document.getElementById('tourismCostChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Tiket Masuk Gunung Luhur', 'Camping Ground', 'Workshop Menganyam', 'Paket Wisata Lengkap'],
            datasets: [{
                label: 'Estimasi Biaya (Ribu Rupiah)',
                data: [15, 50, 75, 200],
                backgroundColor: [
                    'rgba(74, 92, 58, 0.7)',
                    'rgba(242, 183, 5, 0.7)',
                    'rgba(61, 52, 42, 0.7)',
                    'rgba(229, 149, 0, 0.7)'
                ],
                borderColor: [
                    'rgba(74, 92, 58, 1)',
                    'rgba(242, 183, 5, 1)',
                    'rgba(61, 52, 42, 1)',
                    'rgba(229, 149, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Rp ' + context.raw + '.000';
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'Rp ' + value + '.000';
                        }
                    }
                }
            }
        }
    });
}

// Sticky header functionality
function setupStickyHeader() {
    const header = document.getElementById('header');
    const headerOffset = 100;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > headerOffset) {
            header.classList.add('shadow-lg');
            header.classList.add('bg-opacity-95');
        } else {
            header.classList.remove('shadow-lg');
            header.classList.remove('bg-opacity-95');
        }
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// Fade in elements on scroll
function setupScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize everything when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initTourismCostChart();
    setupStickyHeader();
    setupMobileMenu();
    setupSmoothScroll();
    setupScrollAnimations();
});
