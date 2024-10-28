/* -----variable storage----- */
var myLoader;

/* ------timer----- */
function loader() {
    myLoader = setTimeout(reveal, 1000);
}

/* -----function storage----- */

/* loader - that reveals functions when loading */
function reveal() {
    document.getElementById('loader').style.display = "none";
    document.getElementById('mainpage').style.display = "block";
    document.getElementById('nav').style.display = "block";
}

/* Progress Bar - this is use for visible and trackable loading system */
function updateProgressBar(total) {
    let current = 0;
    const progressBar = document.getElementById('progressBar');
    const percentageText = document.getElementById('percentageText');

    const interval = setInterval(() => {
        if (current <= total) {
            const percent = (current / total) * 100;
            progressBar.style.width = percent + '%';
            percentageText.textContent = Math.round(percent) + '%';
            current++;
        } else {
            clearInterval(interval);
        }
    }, 100); // Update every 100 milliseconds
}

// Start the progress bar with a total of 100
updateProgressBar(100);