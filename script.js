function playAudio(key) {
  const audio = document.querySelector(`audio[data-key="${key.toLowerCase()}"]`);
  if (!audio) { return; }
  audio.currentTime = 0;
  audio.play();
  return true;
}

const keys = document.querySelectorAll('.key');
const durationString = getComputedStyle(document.querySelector('.key')).transitionDuration;
const duration = parseFloat(durationString) * 1000;

keys.forEach(key => key.addEventListener('click', function(e){
  const dataKey = e.target.getAttribute('data-key');
  if(playAudio(dataKey)) {
    e.target.parentNode.classList.add('playing');
    setTimeout(() => {e.target.parentNode.classList.remove('playing')}, duration);
  }  
}));

window.addEventListener('keydown', function(e){
  const dataKey = e.key.toLowerCase();
  if(playAudio(dataKey)) {
    const el = document.querySelector(`div[data-key="${dataKey}"]`).parentNode;
    el.classList.add('playing');
    setTimeout(() => {el.classList.remove('playing')}, duration);
  }
});