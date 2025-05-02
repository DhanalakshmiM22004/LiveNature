// Select all elements with the class 'box'
const boxes = document.querySelectorAll('text1');

// Function to check if the element is in the viewport
function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.8;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

// Initial check on page load
checkBoxes();

// Run the function when scrolling
window.addEventListener('scroll', checkBoxes);