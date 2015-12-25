var isShooting = false;
var bulletNumber = 100;
var plane = document.querySelector('#plane');
var bullet = document.querySelector('#bullet');
//bullet.style.bottom = '140px';
var bottom = parseInt(bullet.style.left.replace('px', ''));
var bulletNScr = document.querySelector("#bulletsN");

function shoot(event){
    if (event.keyCode == 32) {
        bulletNumber--;
        bulletNScr.value = bulletNumber;
        if (bulletNumber == 0) {
            alert('You lose!');
        }

        else {
            bullet.style.visibility = 'visible';
            setInterval(function(){
                bottom += 2;
                bullet.style.bottom = bottom + 'px' ;
            },1000/20)
            if(bullet.style.bottom == window.innerHeight){
                bullet.style.bottom = '140px';
                bullet.style.left = parseInt(bullet.style.left.replace('px', '')) + 53 + 'px';
            }
        }
    }
}

document.addEventListener('keydown', shoot, false);

document.addEventListener('click', shoot, false);

