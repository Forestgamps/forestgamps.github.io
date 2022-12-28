let lScroll = 0;
const defOffset = 200;
const header = document.querySelector('header');

const sPos = () => window.pageYOffset || document.documentElement.scrollTop;
const hidden = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(sPos() > lScroll && !hidden() && sPos() > defOffset) {
        //Скролл вниз
        header.classList.add('hide');
    }
    else if(sPos() < lScroll && hidden()){
        //Скролл вверх
        header.classList.remove('hide');
    }

    lScroll = sPos();
})