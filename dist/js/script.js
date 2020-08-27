const shareIcon = document.querySelector('.article__share__icon');
const display = document.querySelector('.display');
const articleReader = document.querySelector('.article__reader');
const articleShare = document.querySelector('.article__share');

function toggleDisplay() {
 display.classList.toggle('show');
 articleShare.classList.toggle('show-bg');
 articleReader.classList.toggle('hide-reader');
 shareIcon.classList.toggle('icon-active');
}

shareIcon.addEventListener('click', toggleDisplay);
