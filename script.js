document.querySelectorAll('a[herf^="#"]').forEach(anchor => {
    anchor.addEventListener('click',function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('herf')).scrollintoView({
            behavior: 'smooth'
        });
    });
});