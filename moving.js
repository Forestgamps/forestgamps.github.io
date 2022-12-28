"use strict"
window.onload = function(){
    const parallax = document.querySelector('.clap-container');

    if (parallax){
        const top = document.querySelector('.top');
        const bottom = document.querySelector('.bottom');
        const corn = document.querySelector('.corn')
        

        let thresholdSets = [];
        for (let i = 0; i <= 1.0; i += 0.05){
            thresholdSets.push(i);
        }

        const callback = function(entries, observer){
            const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
            //console.log(scrollTopProcent);
            if(scrollTopProcent < 100.0){
                setParallaxItemsStyle(scrollTopProcent);
            }
            
        };
        const observer = new IntersectionObserver(callback, {
            threshold:thresholdSets
        });

        observer.observe(document.querySelector('.clap-container'));

        function setParallaxItemsStyle(scrollTopProcent){
            top.style.cssText = `transform: rotate(${scrollTopProcent / 9}deg) translate(-${scrollTopProcent / 9}%, -${scrollTopProcent * 2}%);`;
            bottom.style.cssText = `transform: rotate(-${scrollTopProcent / 9}deg) translate(-${scrollTopProcent / 9}%, ${scrollTopProcent / 9}%);`;
        }
    }
}