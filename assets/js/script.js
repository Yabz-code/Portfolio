// parallax

let Plan1 = document.getElementById('Plan1');
let Plan2 = document.getElementById('Plan2');
let Plan3 = document.getElementById('Plan3');
let Plan4 = document.getElementById('Plan4');
let Plan5 = document.getElementById('Plan5');
let Plan6 = document.getElementById('Plan6');
let Plan7 = document.getElementById('Plan7');
let Plan8 = document.getElementById('Plan8');
let text = document.getElementById('text')

window.addEventListener('scroll', () => {
	let value = window.scrollY;

	text.style.marginTop = value * 1.05 + 'px';
	Plan1.style.top = value * 1 + 'px';
	Plan2.style.top = value * .9 + 'px';
	Plan3.style.top = value * .8 + 'px';
	Plan4.style.top = value * .7 + 'px';
	Plan5.style.top = value * .6 + 'px';
	Plan6.style.top = value * .5 + 'px';
	Plan7.style.top = value * .4 + 'px';
	Plan8.style.top = value * .09 + 'px';

});

// var isMobile = Math.min(window.screen.width, window.screen.height) < 620 || navigator.userAgent.indexOf("Mobi") > -1;


// const img1 = document.querySelector('#Plan1');
// const img2 = document.querySelector('#Plan2');
// const img3 = document.querySelector('#Plan3');
// const img4 = document.querySelector('#Plan4');
// const img5 = document.querySelector('#Plan5');
// const img6 = document.querySelector('#Plan6');
// const img7 = document.querySelector('#Plan7');
// const img8 = document.querySelector('#Plan8');


// if(isMobile){
	
// 	img1.remove();
// 	img2.remove();
// 	img3.remove();
// 	img4.remove();
// 	img5.remove();
// 	img6.remove();
// 	img7.remove();
// 	img8.remove();
	
// }
