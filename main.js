const elemnts = document.querySelectorAll('.element');

elemnts.forEach((element) => {
    element.addEventListener('click', () => {
        const dropdown = element.querySelector('.show');
        if (!element.classList.contains('active')) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
            dropdown.animate([{transform: 'rotate(45deg)'}, {transform: 'rotate(0deg)'}], { duration: 300 });
        }
    });
});