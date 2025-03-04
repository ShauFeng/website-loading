document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.querySelector('.progress-bar');
    var progress = 0;
    var interval = setInterval(function() {
        progress += 5;
        if (progress > 100) {
            progress = 100;
            clearInterval(interval);
        }
        progressBar.style.width = progress + '%';
    }, 1000);
});
