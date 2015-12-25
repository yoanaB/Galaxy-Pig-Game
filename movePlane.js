var step = 5;
var planeLeft = 60;

window.addEventListener('load', function(){
    var plane = document.getElementById('plane');
    var bullet = document.querySelector('#bullet')
    document.addEventListener('keydown', function(Event){
        switch(Event.keyCode){
            case 37:
                planeLeft -= step;
                break;
            case 39:
                planeLeft += step;
                break;
        }
        plane.style.left = planeLeft + 'px';
        bullet.style.left = planeLeft + 53 + 'px';
    });

    document.addEventListener("mousemove", function(e){
       plane.style.left = (e.clientX - 55) + 'px';
       bullet.style.left = (e.clientX) + 'px';
    });
})
