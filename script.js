function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');
  
    // Toggle button state based on the current text
    if (buttonElement.innerText === 'Subscribe') {
      buttonElement.innerHTML = 'Subscribed';
      buttonElement.classList.add('is-subscribed');
    } else {
      buttonElement.innerHTML = 'Subscribe';
      buttonElement.classList.remove('is-subscribed');
    }
  }



  
// like button  
let likeCount = 0;

function toggleLike() {
  const button = document.querySelector('.js-like-button');
  const countElement = document.querySelector('.js-like-count');

  if (button.classList.contains('liked')) {
    button.classList.remove('liked');
    button.innerHTML = 'Like';
    likeCount--;
  } else {
    button.classList.add('liked');
    button.innerHTML = 'Liked';
    likeCount++;
  }

  countElement.textContent = likeCount;
}

function notify() {
    const button = document.querySelector('.js-notifications-button');

    if (button.classList.contains('enabled')){
        button.classList.remove('enabled');
        button.innerHTML = 'Enable Notifications';
    } else {
        button.classList.add('enabled');
        button.innerHTML = 'Disable Notifications';
    }
}

function lightMode() {
    const body = document.body;
    const button = document.querySelector('.js-light-button');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.innerHTML = 'Enable Dark Mode';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        button.innerHTML = 'Enable Light Mode';
    }
}

document.querySelector('.js-light-button').addEventListener('click', lightMode);