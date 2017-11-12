// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array:
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

"use strict"

const ul = document.querySelector('ul');

function showImages() {
  fetch('images.json') // fetch the wanted data
  .then(function(response) { return response.json(); }) // parse the fetch response as json data type
  .then(function(data) {
    const json = data;
    for (var i = 0; i < json.length; i++) {

      // make some variables that create elements
      let li = document.createElement('li');
      let figure = document.createElement('figure');
      let link = document.createElement('a');
      let img = document.createElement('img');
      let figcaption = document.createElement('figcaption');
      let h3 = document.createElement('h3');

      let textNode = document.createTextNode(json[i].mediaTitle);  // here we make text node for the h3 heading to use

      //li.innerHTML = figure + link.setAttribute("href", "img/original/" + json[i].mediaUrl) +  img.setAttribute("src", "img/thumbs/" + json[i].mediaThumb) + figcaption + h3.appendChild(textNode);

      li.appendChild(figure);
      ul.appendChild(li);

      figure.appendChild(link);

      link.setAttribute("href", "img/original/" + json[i].mediaUrl);
      link.appendChild(img);

      img.setAttribute("src", "img/thumbs/" + json[i].mediaThumb);

      figure.appendChild(figcaption); // here we make it so we append this to be outside of the image-link but inside the figure-element

      figcaption.appendChild(h3);
      h3.appendChild(textNode);

      //ul.appendChild(li); // use appendchild to get right order
    }
  })
  .catch(function(err) { // if response not ok (error)
    console.log(err);
  	alert('Something went wrong')
  });
}

window.onload = showImages;
