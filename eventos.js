document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.event');

    events.forEach(event => {
        event.addEventListener('mouseenter', () => {
            event.classList.add('highlight');
        });

        event.addEventListener('mouseleave', () => {
            event.classList.remove('highlight');
        });
    });
});
