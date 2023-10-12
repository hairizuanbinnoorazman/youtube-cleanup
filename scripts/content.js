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
            console.info('deleted youtube shorts video');
        }
    });
}

var timeout = null;
// DOMSubtreeModified is an event that triggers when any child node within it changes
document.addEventListener("DOMSubtreeModified", function() {
    if(timeout) {
        // Cancels the timeout previously set
        clearTimeout(timeout);
    }
    // Run the following function once timer expires
    timeout = setTimeout(listener, 500);
}, false);