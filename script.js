$(document).ready(function () {
    $('#mobile-btn').on('click', function () {
        const $icon = $('#mobile-btn').find('i');

        $('#mobile-menu').toggleClass('active');
        $icon.toggleClass('fa-bars');
        $icon.toggleClass('fa-xmark');
    });

    const menuSection = document.querySelector('.menu-section');
    if (menuSection) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        menuSection.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.2 }
        );
        observer.observe(menuSection);

        const tabs = menuSection.querySelectorAll('.menu-tab[data-menu]');
        const grids = menuSection.querySelectorAll('.menu-grid[data-menu]');

        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-menu');
                const currentGrid = menuSection.querySelector('.menu-grid.is-active');
                const nextGrid = menuSection.querySelector(`.menu-grid[data-menu="${target}"]`);

                if (!nextGrid || nextGrid === currentGrid) return;

                tabs.forEach((t) => t.classList.remove('active'));
                tab.classList.add('active');

                if (currentGrid) {
                    currentGrid.classList.remove('is-active');
                    currentGrid.classList.add('is-hidden');
                }

                nextGrid.classList.remove('is-hidden');
                void nextGrid.offsetWidth;
                nextGrid.classList.add('is-active');
            });
        });
    }
});
