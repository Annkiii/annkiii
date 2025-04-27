document.getElementById('struktur').addEventListener('click', function() {
    showContent('struktur-content');
});

document.getElementById('jadwal').addEventListener('click', function() {
    showContent('jadwal-content');
});

document.getElementById('memory').addEventListener('click', function() {
    showContent('memory-content');
});

function showContent(contentId) {
    const allContents = document.querySelectorAll('.content');
    allContents.forEach(function(content) {
        content.classList.remove('active');
    });

    const contentToShow = document.getElementById(contentId);
    contentToShow.classList.add('active');
}
