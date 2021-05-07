var x_axis = 0;
var y_axis = 0;

document.onkeydown = check_key;

var upKey = document.getElementById('up');
var downKey = document.getElementById('down');
var rightKey = document.getElementById('right');
var leftKey = document.getElementById('left');

function check_key(e){
    e = e || window.event;

    if(e.keyCode =='38'){
        //move up
        mov_car("up");
    }
    else if(e.keyCode == '40'){
        //move down
        mov_car("down");
    }
    else if(e.keyCode == '37'){
        //move left
        mov_car("left");
    }
    else if(e.keyCode == '39'){
        //move right
        mov_car("right");
    }
}

function mov_car (a){
        if(a == 'right'){
            x_axis = x_axis + 10;
            $(".car").css({"transform": "translate("+x_axis+"px,"+y_axis+"px)rotate(270deg)"});
        }
        else if( a == 'left'){
            x_axis = x_axis - 10;
            $(".car").css({"transform":"translate("+x_axis+"px,"+y_axis+"px)rotate(90deg)"});
        }
        else if(a == 'up'){
            y_axis = y_axis - 10;
            $(".car").css({"transform":"translate("+x_axis+"px,"+y_axis+"px)rotate(180deg)"})
        }
        else if( a== 'down'){
            y_axis = y_axis +10;
            $(".car").css({"transform":"translate("+x_axis+"px,"+y_axis+"px)rotate(360deg)"});
        }
}

















