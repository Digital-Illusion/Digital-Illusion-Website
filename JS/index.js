var Name = document.getElementById('OS');
var userAgent = navigator.userAgent.toLowerCase();
var Android = userAgent.indexOf("android") > -1;
if (navigator.appVersion.indexOf("Win") != -1)
    Name.innerHTML = "Windows OS";
if (navigator.appVersion.indexOf("Mac") != -1)
    Name.innerHTML = "Mac OS";
if (navigator.appVersion.indexOf("X11") != -1)
    Name.innerHTML = "Arch Linux";
if (navigator.appVersion.indexOf("Linux") != -1)
    Name.innerHTML = "Linux OS";
if (Android)
    Name.innerHTML = "Android OS";
