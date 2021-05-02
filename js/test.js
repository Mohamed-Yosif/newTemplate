// make the click links is active

let link = document.querySelectorAll('.links li');
link.forEach(item => {
    item.addEventListener('click' , function() {
        link.forEach(i => {
            i.classList.remove('active');
        });
        item.classList.add("active");
    });
});

// shoot the slider

$('.bxslider').bxSlider({
    pager: false
})

// smooth scrool on links

$(link).on('click',function() {
    console.log($(`#${this.textContent}`))
    $('html').animate({
        scrollTop: ($(`#${this.textContent}`).offset().top)
    })
});
// make the notes like slider

let notes = document.querySelectorAll('.testi .our');
let currentNot = 1;

setInterval(function() {
    notes[currentNot -1].classList.add('active');
    setTimeout(function () {
        notes.forEach(item => {
            item.classList.remove('active');
        });
    }, 2500)
    if(currentNot === notes.length){
        currentNot=1;
    } else{
        currentNot ++;
    }
} , 3000);

// make the active class with the click on the li

let li = document.querySelectorAll('.projects ul li');

li.forEach(item => {
    item.addEventListener('click', function() {
        li.forEach(i => {
            i.classList.remove('selected');
        });
        this.classList.add('selected')
    })
});

// trigger the mixitup blugins

$('#Container').mixItUp();

// trigger the nice scrool plugin

$('html').niceScroll({
    cursorcolor: '#1abc9c',
    cursorwidth: '5px'
});

// remove loading page when the page reload

window.onload = function() {
    document.querySelector('.loading').remove();
    document.body.style.overflow = 'scroll'
}