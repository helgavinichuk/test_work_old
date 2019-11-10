$(document).ready(function() {
    /*$("#slide2").on('change',function(){
        $('.carousel-list1').animate({ left : '-1125' + "px"}, 100);
    });

    $("#slide1").on('change',function(){
        $('.carousel-list1').animate({ left : 0 + "px"}, 100);
    });*/
    
    var prev = $('.prev');
    var next = $('.next');
    var elementsList = $('.carousel-list');
 
    var pixelsOffset = 400
    var currentLeftValue = 0;

    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 2) * pixelsOffset);
    var maximumOffset = 0;

    prev.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 400;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        } else {
            currentLeftValue = minimumOffset;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
            } 

    });
 
    next.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 400;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        } else {
            currentLeftValue = 0;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
            } 
        $(input[type='radio']).attr('checked');   
    });

    //second slider
    var prev1 = $('.prev1');
    var next1 = $('.next1');
    var elementsList1 = $('.carousel-list1');
 
    var pixelsOffset1 = 1125
    var currentLeftValue1 = 0;

    var elementsCount1 = elementsList1.find('li').length;
    var minimumOffset1 = - ((elementsCount1 - 1) * pixelsOffset1);
    var maximumOffset1 = 0;
    if ((screen.width>=320) && (screen.width<=720)){
        prev1.click(function() {
            if (currentLeftValue1 != maximumOffset1) {
                currentLeftValue1 += 923;
                elementsList1.animate({ left : currentLeftValue1 + "px"}, 500);
               // $('#slide1').attr('checked','checked');
            } else {
                currentLeftValue1 = - ((elementsCount1 - 1) * 923);
                elementsList1.animate({ left : currentLeftValue1 + "px"}, 500);
                //$('#slide2').attr('checked','checked');
                } 
    
        });
     
        next1.click(function() {
            if (currentLeftValue1 != - ((elementsCount1 - 1) * 923)) {
                currentLeftValue1 -= 923;
                $('#slide2').attr('checked','checked');
                elementsList1.animate({ left : currentLeftValue1 + "px"}, 500);
            } else {
                currentLeftValue1 = 0;
                elementsList1.animate({ left : currentLeftValue1 + "px"}, 500);
                $('#slide1').attr('checked','checked');
                } 
        });
    }
    if (screen.width>=721){
        prev1.click(function() {
            if (currentLeftValue1 != maximumOffset1) {
                currentLeftValue1 += 1125;
                elementsList1.animate({ left : currentLeftValue1 + "px"}, 500);
               // $('#slide1').attr('checked','checked');
            } else {
                currentLeftValue1 = minimumOffset1;
                elementsList1.animate({ left : currentLeftValue1 + "px"}, 500);
                //$('#slide2').attr('checked','checked');
                } 
    
        });
     
        next1.click(function() {
            if (currentLeftValue1 != minimumOffset1) {
                currentLeftValue1 -= 1125;
                $('#slide2').attr('checked','checked');
                elementsList1.animate({ left : currentLeftValue1 + "px"}, 500);
            } else {
                currentLeftValue1 = 0;
                elementsList1.animate({ left : currentLeftValue1 + "px"}, 500);
                $('#slide1').attr('checked','checked');
                } 
        });
    }
    

    
    

    setTimeout(function next() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 400;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        } else {
            currentLeftValue = 0;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
            } 
    }, 2000);
     
   
    
 
});