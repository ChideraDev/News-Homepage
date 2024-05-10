const image = document.getElementById('responsive-image');

// Function to update the image source based on viewport size
function updateImageSrc() {
  const viewportWidth = window.innerWidth;

 if (viewportWidth <= 920) {
    image.src = './assets/images/image-web-3-mobile.jpg';
    console.log("hey")
  } else {
    image.src = './assets/images/image-web-3-desktop.jpg';
  }
}
updateImageSrc();

// Add event listener to update the image source when the window is resized
window.addEventListener('resize', updateImageSrc);
// toggle hamburger
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-ul-big');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuIcon.classList.toggle('active');
});