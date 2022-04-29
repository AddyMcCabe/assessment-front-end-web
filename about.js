console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted');
}

let catPic = document.getElementById('catPic');
let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
// catPic.addEventListener('mouseover',  )