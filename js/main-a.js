// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

"use strict"

const url = 'images.html';
const ul = document.querySelector('ul');

  function showImages() {
  fetch(url) // fetch the wanted data
  .then(function(response) { // if response ok
    response.text().then(function (responseText) { // convert the response object to usable text
      ul.innerHTML = responseText;
  });
  })
  .catch(function(err) { // if response not ok (error)
  	alert('Something went wrong')
  });
}

window.onload = showImages;
