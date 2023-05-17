function playAudio(event) {
  const eKey = event.key;
  const audio = document.querySelector(`audio[data-key="${eKey}"]`);
  const key = document.querySelector(`.key[data-key="${eKey}"]`);

  // if there's no audio bound to the key, return
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;

  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// the whole window has an event listener
window.addEventListener('keydown', playAudio);
