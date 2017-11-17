(function() {
    document.onmousedown = function(ed) {
        var div = document.createElement('div');
        div.className = "fileDiv";
        document.getElementById('main').appendChild(div)
        var startX = ed.clientX;
        var startY = ed.clientY;
        document.onmousemove = function(em) {
            var endX = em.clientX;
            var endY = em.clientY;
            var offsetX = endX - startX;
            var offsetY = endY - startY;
            div.style.left = Math.min(endX, startX) + 'px';
            div.style.top = Math.min(endY, startY) + 'px';
            div.style.width = Math.abs(offsetX) + 'px';
            div.style.height = Math.abs(offsetY) + 'px';
        }
    }
    document.onmouseup = function() {
        var div = document.getElementsByClassName('fileDiv');
        document.onmousemove = function() {};
        if (div[0]) {
            document.getElementById('main').removeChild(div[0]);
        }
    }
})();