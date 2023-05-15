const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'hi'}, 'google_translate_element');
}