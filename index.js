const images = document.getElementsByClassName("image");
let currentIndex;

const imageContent = [];
for (let i = 0; i < images.length; i++) {
  const src = images[i].querySelector("img").src;
  const text = images[i].querySelector("p").innerHTML;
  const innerHTML = `
        <img src="${src}">
        <p class="description">${text}</p>
    `;
  imageContent.push(innerHTML);
}

const openOverlayAtIndex = (index) => {
  // Updating current index
  currentIndex = index;

  // Disable scrolling of the background
  document.body.style.overflow = "hidden";

  // Open overlay
  const overlay = document.getElementById("image-viewer-overlay");
  overlay.style.display = "flex";

  // Changing the content
  const content = overlay.querySelector(".content");
  content.innerHTML = imageContent[index];

  // Changing the nav-num
  const img_num = overlay.querySelector(".img-num");
  img_num.innerHTML = `${index + 1} / ${images.length}`;
};

// Adding event listeners to images
for (let i = 0; i < images.length; i++) {
  const image = images[i];
  image.addEventListener("click", () => {
    openOverlayAtIndex(i);
  });
}

const closeOverlay = () => {
  // Enable scrolling
  document.body.style.overflow = "auto";

  // Closing the overlay
  const overlay = document.getElementById("image-viewer-overlay");
  overlay.style.display = "none";
};

// Navigating back or next
const back = () => {
  if (currentIndex === 0) return;
  openOverlayAtIndex(currentIndex - 1);
};

const next = () => {
  if (currentIndex === imageContent.length - 1) return;
  openOverlayAtIndex(currentIndex + 1);
};
