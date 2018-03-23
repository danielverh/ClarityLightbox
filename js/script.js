$(function () {
    $('body').append('<div class="modal">\n' +
        '    <div class="modal-content">\n' +
        '        <span class="close icon-close"></span>\n' +
        '        <img src="" class="modal-image">\n' +
        '    </div>\n' +
        '</div>');

    // Handle event on .close button click
    $('.close').click(function () {
        $('.modal.modal-active').removeClass('modal-active')
            .addClass('fade-out');
        $('body').removeClass('blur-active')
            .addClass('blur-out');
    });

    // Show the lightbox modal
    $('a.lightbox').click(function (event) {
        // Prevent the link from going to the image
        event.preventDefault();

        $('.modal img').attr('src', $(this).attr('href'));

        // Add the class to the body to make .wrapper blurred
        $('body').removeClass('blur-out').addClass('blur-active');

        // Set active class on the modal
        $('.modal').removeClass('fade-out').addClass('modal-active');
    })
});