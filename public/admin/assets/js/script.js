var uri = document.getElementById("uri");

window.setTimeout(function () {
    // Move to a new location
    window.location.href = uri.href;
}, 10000);

AOS.init();
