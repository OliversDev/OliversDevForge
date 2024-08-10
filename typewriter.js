document.addEventListener('DOMContentLoaded', function() {
    const text = `< Oliver's Dev Forge />`;

    const typewriterElement = document.getElementById('typewriter');
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterElement.innerHTML += text[index];
            index++;
            setTimeout(type, 50); // Adjust typing speed here
        }
    }

    type();
});
