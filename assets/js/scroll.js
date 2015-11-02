window.onload = function() {
    var height = document.documentElement.clientHeight,
        btn = document.getElementById('button'),
        timer = null,
        scroll = true;
    addEvent(btn, 'click', toTop);
    addEvent(window, 'scroll', function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (!scroll) {
            clearInterval(timer);
        }
        scroll = false;
        if (scrollTop > height) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });   
    function toTop() {
        timer = setInterval(function() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = Math.floor(- scrollTop / 10);
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed;
            scroll = true;
            if (scrollTop == 0) {
                clearInterval(timer);
            }
        }, 30);
    }
    function addEvent(element, event, listener) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, false);
        } else{
            element.attachEvent('on' + event, listener);
        }
    }
};