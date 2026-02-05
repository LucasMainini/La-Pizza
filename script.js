$(document).ready(function () {
    $('#mobile-btn').on('click', function () {
        const $icon = $('#mobile-btn').find('i');

        $('#mobile-menu').toggleClass('active');
        $icon.toggleClass('fa-bars');
        $icon.toggleClass('fa-xmark');
    });
});
