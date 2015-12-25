(function () {
    window.addEventListener('load', function () {
        var target = document.querySelector('#pig');
        target.style.left = '60px';
        var targetPosition = target.style.left.replace('px', '');
        var direction = 1;

        function moveTarget () {
            var targetPosition = parseInt(target.style.left.replace('px', ''));
            if (targetPosition < 60) {
                direction = 1;
            } else if (targetPosition >= window.innerWidth - 140) {
                direction = -1;
            }
            target.style.left = targetPosition + 2 * direction + 'px';
        }
        setInterval(moveTarget, 10);
    });
})();