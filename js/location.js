let myImg = document.querySelector("#imdd")
let Images = [ "./imges/lo2.jpg" , "./imges/lo1.jpg" , "./imges/lo3.jpg" , "./imges/lo4.jpg"  ]
let i = 0 ;
function slideshow (){
    myImg.setAttribute('src' , Images[i]);

    if (i == Images.length - 1){
        i=0;
    }else{
        i++;
    }
    setTimeout(function()  {
        slideshow()
    }, 2000);
}
slideshow()