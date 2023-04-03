const videos = document.querySelectorAll('.video');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});
const burger = document.getElementsByClassName('.burger')
const x = document.getElementsByClassName('.x')
const menu = document.getElementById('menu')
const background = document.getElementById('background')
function openMenu () {
  background.style.display = 'unset'
  console.log(x.style.transform)
}
function closeMenu () {
  console.log('hello')
  background.style.display = 'none'
}


