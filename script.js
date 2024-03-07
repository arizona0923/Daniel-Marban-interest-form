window.addEventListener('scroll', function() {
    var parallax = document.getElementById('parallax');
    var scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * 0.2 + 'px)';
});
