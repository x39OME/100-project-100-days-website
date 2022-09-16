// Toggle Menu
function menuToggle(){
	const menuToggle = document.getElementById('menuToggle');
	const navigation = document.getElementById('navigation');
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');
};

// Countdown Done !!
// const body = document.body;
// const endTime = new Date('9 16 2022 23:59:59');
// const daysEl = document.getElementById('days');
// const hoursEl = document.getElementById('hours');
// const minutesEl = document.getElementById('minutes');
// const secondsEl = document.getElementById('seconds');

// setInterval(updateCountdown, 1000)

// function updateCountdown() {
// 	const startTime = new Date();
// 	const diff = endTime - startTime;
// 	const days = Math.floor(diff / 1000 / 60 / 60 / 24);
// 	const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
// 	const minutes = Math.floor(diff / 1000 / 60) % 60;
// 	const seconds = Math.floor(diff / 1000) % 60;
// 	daysEl.innerHTML = days;
// 	hoursEl.innerHTML = hours < 10 ? '0'+hours : hours;
// 	minutesEl.innerHTML = minutes < 10 ? '0'+minutes : minutes;
// 	secondsEl.innerHTML = seconds < 10 ? '0'+seconds : seconds;
// };

// Time & Date (Footer)
setInterval(function(){
document.getElementById('date').innerHTML = Date();
},1000);

// Scroll To Top
let scrollTop = document.querySelector('.scrollTop');

window.onscroll = function (){
	this.scrollY >= 1000 ? scrollTop.classList.add('show') : scrollTop.classList.remove('show');
};
scrollTop.onclick = function(){
	window.scrollTo({
		top: 0,
		behavior:'smooth'
	});
};
