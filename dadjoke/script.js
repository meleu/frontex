const jokeText = document.getElementById('joke-text');


/****************************
* get joke button event handler
*****************************/
// get new joke from the API
async function getJoke() {
  const apiUrl = 'https://icanhazdadjoke.com/';
  let jokeJson;
  let joke;

  try {
    const response = await fetch(apiUrl, {
      headers: { Accept: "application/json" }
    });
    jokeJson = await response.json();
    joke = jokeJson.joke
    console.log(joke)
  } catch (error) {
    joke = 'Whoops! No joke! :(';
    console.log(joke, error);
  }
  jokeText.innerText = joke;
}

function disableButtonForSeconds(button, seconds) {
  const originalColor = button.style.backgroundColor;
  const originalTransform = button.style.transform;

  button.disabled = true;
  button.style.backgroundColor = '#bbb'
  button.style.transform = 'none'

  setTimeout(() => {
    button.disabled = false;
    button.style.backgroundColor = originalColor;
    button.style.transform = originalTransform;
  }, 5_000);
}

// button to the event
const newJokeButton = document.getElementById('new-joke-button');

// create the event listener
newJokeButton.addEventListener('click', (event) => {
  getJoke(event);
  disableButtonForSeconds(event.target, 5)
});


/****************************
* tweet button event handler
*****************************/
function tweetJoke() {
  const text = jokeText.innerText;
  const author = 'icanhazdadjoke.com'
  const twitterUrl = `https://twitter.com/intent/tweet?text="${quoteText}" - ${author}`;
  window.open(twitterUrl, '_blank');
}

// get the elements
const twitterButton = document.getElementById('twitter-button');

// create an event listener
twitterButton.addEventListener('click', tweetJoke);

/****************************
* github button event handler
*****************************/
// callback function
function githubLink() {
  const projectName = 'quotegen';
  const baseUrl = 'https://github.com/meleu/frontex/tree/master';
  window.open(`${baseUrl}/${projectName}`, '_blank');
}

// get the element
const githubButton = document.getElementById('github-button');

// event listener
githubButton.addEventListener('click', githubLink);
