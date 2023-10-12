function listener()
{
    // Remove all youtube shorts shelves
    aa = document.querySelectorAll('ytd-reel-shelf-renderer');
    aa.forEach((a) => {a.remove()});
    console.info("deleted youtube shorts shelves");

    // Remove all youtube shorts video
    bb = document.querySelectorAll('#video-title');
    bb.forEach(item => {
        if (item.getAttribute('href') == null) { return; }
        if (item.href.includes('https://www.youtube.com/shorts')) {
            item.closest('ytd-video-renderer').remove();
        } 
        console.info('deleted youtube shorts video');
    });
}

var timeout = null;
document.addEventListener("DOMSubtreeModified", function() {
    if(timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(listener, 500);
}, false);