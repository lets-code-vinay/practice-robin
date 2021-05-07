    
    //('.darkMode').click(function(){
       // $("body").css("background","black")})


      
     /* 
       function changeColor(color) { 
           document.body.style.background = color; 
       } 
         
       function gfg_Run() { 
           changeColor('black'); 
            } 
*/

$('#light').on('click', function() { 
    $('body').css('backgroundColor', 'white');
    $('p').css('color','black');
})
        $('#dark').on('click', function() { 
            $('body').css('backgroundColor', 'rgb(26, 24, 24)');
            $('p').css('color','white');
 })
