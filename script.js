// References to elements
const clothesSelect = document.getElementById("clothes-select");
const chillGuyImage = document.getElementById("chillGuyImage");
const bgImageUpload = document.getElementById("bg-image-upload");
const canvas = document.getElementById("canvas");
const bgColorInput = document.getElementById("bg-color");
const textInput = document.getElementById("text-input");
const customText = document.getElementById("customText");
const textColorInput = document.getElementById("text-color");

// Change outfit
clothesSelect.addEventListener("change", () => {
    chillGuyImage.src = clothesSelect.value;
});

// Change background color
bgColorInput.addEventListener("input", () => {
    canvas.style.backgroundColor = bgColorInput.value;
});

// Upload background image
bgImageUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            canvas.style.backgroundImage = `url(${e.target.result})`;
            canvas.style.backgroundSize = 'cover';
        };
        reader.readAsDataURL(file);
    }
});

// Update custom text
textInput.addEventListener("input", () => {
    customText.textContent = textInput.value;
});

// Change text color
textColorInput.addEventListener("input", () => {
    customText.style.color = textColorInput.value;
});

// Make the text draggable
let isDragging = false;
let offsetX, offsetY;

customText.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    customText.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left - offsetX;
        let y = e.clientY - rect.top - offsetY;

        // Restrict text within canvas boundaries
        x = Math.max(0, Math.min(x, canvas.offsetWidth - customText.offsetWidth));
        y = Math.max(0, Math.min(y, canvas.offsetHeight - customText.offsetHeight));

        customText.style.left = `${x}px`;
        customText.style.top = `${y}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    customText.style.cursor = "move";
});

// Make the chill guy image draggable
let isImageDragging = false;
let imageOffsetX, imageOffsetY;

chillGuyImage.addEventListener("mousedown", (e) => {
    isImageDragging = true;
    imageOffsetX = e.offsetX;
    imageOffsetY = e.offsetY;
    chillGuyImage.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (isImageDragging) {
        const rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left - imageOffsetX;
        let y = e.clientY - rect.top - imageOffsetY;

        // Restrict image within canvas boundaries
        x = Math.max(0, Math.min(x, canvas.offsetWidth - chillGuyImage.offsetWidth));
        y = Math.max(0, Math.min(y, canvas.offsetHeight - chillGuyImage.offsetHeight));

        chillGuyImage.style.left = `${x}px`;
        chillGuyImage.style.top = `${y}px`;
    }
});

document.addEventListener("mouseup", () => {
    isImageDragging = false;
    chillGuyImage.style.cursor = "move";
});

