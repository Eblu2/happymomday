

//-----------------------------------------------------------------------------------
// Slideshow

// create array of images in slideshow
var imagePaths = [
	"images/photo1.jpg",
	"images/photo2.jpg",
	"images/photo3.jpg",
	"images/photo4.jpg",
	"images/photo5.jpg",
	"images/photo6.jpg",
	"images/photo7.jpg",
	"images/photo8.jpg",
	"images/photo9.jpg",
	"images/photo10.jpg",
	"images/photo11.jpg",
	"images/photo12.jpg",
	"images/photo13.jpg",
	"images/photo14.jpg",
	"images/photo15.jpg",
	"images/photo16.jpg",
	"images/photo17.jpg"
];

// set the current image to the first in the array
var currentIndex = 0;

// declare a variable to be initialized within a function
var currentImgPath;

// save prev/next links to variables
var prevLink = document.getElementById('prev');
var nextLink = document.getElementById('next');

// declare a function to set the new image path
function setImgPath() {
	// find the image path at the currentIndex
	currentImgPath = imagePaths[currentIndex];

	// set that to the image src attribute
	document.getElementById('image').setAttribute('src', currentImgPath);
}

// add click listener to prevLink variable
prevLink.addEventListener("click", function(e) {
	// prevent default behavior of link
	e.preventDefault();

	// if we are not on the first slide
	if (currentIndex > 0) {
		// decrease the currentIndex by one, and call the function
		// to set the new image
		currentIndex -= 1;
		setImgPath();
	}

});

// add click listener to nextLink variable
nextLink.addEventListener("click", function(e) {
	// prevent default behavior of link
	e.preventDefault();

	// if we are not on the last slide
	if ((currentIndex + 1) < imagePaths.length) {
		// increase the currentIndex by one, and call the function
		// to set the image path to the next image
		currentIndex += 1;
		setImgPath();
	}
});

