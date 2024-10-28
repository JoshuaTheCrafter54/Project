const boxes = document.querySelectorAll(".box"); // Correctly selecting all elements with class "box"

window.addEventListener('scroll', revealBoxes);

revealBoxes(); // To show boxes on initial load

function revealBoxes() {
    const triggerBottom = window.innerHeight * 4 / 5; // Set trigger point for revealing boxes

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; // Get the distance from the top

        if (boxTop < triggerBottom) {
            box.classList.add('show'); // Add "show" class if box is in view
        } else {
            box.classList.remove('show'); // Remove "show" class if box is out of view
        }
    });
}