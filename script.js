console.log("kaise ho sare");
const SearchIcon=document.getElementById('searchBar');
const crossClick=document.querySelector('.corssX');
const searchFrom=document.getElementById('form-search');



SearchIcon.addEventListener('click',()=>{
   searchFrom.style.scale=1;
})

crossClick.addEventListener('click',()=>{
    searchFrom.style.scale=0;
})

//slider img

const sildess=document.querySelectorAll(".imagesContain");
console.log(sildess)
var counter=0;
sildess.forEach(
    (imagesContain,index)=>{
        imagesContain.style.left= `${index *110}%`;
    }
)

const slideImage=()=>{
    sildess.forEach(
        (imagesContain)=>{
            imagesContain.style.transform=`translateX(-${counter * 100}%)`;
        }
    )
}
const goNext=()=>{
    counter++
 slideImage()
}
const goPrev=()=>{
  counter--
  slideImage()
}

const eyeHart=document.querySelectorAll('.eye-hart');
const dishBox=document.querySelectorAll('.dish');

dishBox.addEventListener('mouseenter',()=>{
    eyeHart.style.scale=1;
})
 