let myImg = document.querySelector("#imdd")
let Images = [ "imges/p1.jpg" , "imges/p2.jpg" , "./imges/p3.jpg" , "./imges/p4.jpg" ,"./imges/p5.jpg " ]
let i = 0 ;
function slideshow (){
    myImg.setAttribute('src' , Images[i]);

    if (i == 3){
        i=0;
    }else{
        i++;
    }
    setTimeout(function()  {
        slideshow()
    }, 2000);
}

slideshow()
const getreq = async  ()=> {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    const data = await response.json()
    console.log(data)
}
