// Wrap every letter in a span
var textWrapper = document.querySelector('.animation .animation-letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='animation-letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.animation .animation-letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.animation',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

function blinker() {
	$('.blinking').fadeOut(500);
	$('.blinking').fadeIn(500);
}
setInterval(blinker, 1000);