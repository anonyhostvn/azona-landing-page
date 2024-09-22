const listBox = document.querySelectorAll('.box');
const wrapperBox = document.querySelector('.review-box');
var btnLeft = document.querySelector('.fa-flip-horizontal');
var btnRight = document.querySelector('.fa-flip-vertical');
const reviewDiv = document.querySelector('.review');
const m = document.querySelector('.menu-button');

document.addEventListener('DOMContentLoaded', function () {
    // responsive
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1238) {
            make_slide(3);
        } else if (window.innerWidth >= 992) {
            make_slide(2);
        } else {
            make_slide(1);
        }
    });

    const media = [
        window.matchMedia('(min-width: 1238px)'),
        window.matchMedia('(min-width: 992px)'),
    ];

    if (media[0].matches) {
        make_slide(3);
    } else if (media[1].matches) {
        make_slide(2);
    } else {
        make_slide(1);
    }
});

function make_slide(amountSlideAppear) {
    // set width and margin for item slide
    const widthItemAndMargin = reviewDiv.offsetWidth / amountSlideAppear;
    let widthAllBox = widthItemAndMargin * listBox.length;
    wrapperBox.style.width = `${widthAllBox}px`;

    listBox.forEach((element) => {
        element.style.marginRight = '20px';
        element.style.width = `${widthItemAndMargin - 20}px`;
    });

    // handle slide
    let count = 0;
    let spacing = widthAllBox - amountSlideAppear * widthItemAndMargin;
    btnRight.addEventListener('click', function () {
        count += widthItemAndMargin;

        if (count > spacing) {
            count = 0;
        }
        wrapperBox.style.transform = `translateX(${-count}px)`;
    });

    btnLeft.addEventListener('click', function () {
        count -= widthItemAndMargin;

        if (count < 0) {
            count = spacing;
        }
        wrapperBox.style.transform = `translateX(${-count}px)`;
        $('.${-count}').addClass('biggest');
    }); 
  
}
var s= document.getElementById("sub-menu");
var dem=1;
  m.addEventListener('click', function(){
    dem++;
    if(dem%2==0)
    s.style.display= "block" ;
    else s.style.display= "none" ;
 }) ;

   
   


