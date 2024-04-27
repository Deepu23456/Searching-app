const input = document.querySelector('input')
const image = document.querySelectorAll('.image')
const search = document.querySelector('.search')
const imageContainer = document.querySelectorAll('.img')
const open = document.querySelector(".open-icon")
const close = document.querySelector(".close-icon")
const h2 = document.querySelector("h2")

open.addEventListener('click', (open)=> {
   console.log(open);
   open.target.parentElement.classList.add("menu-open")
})

close.addEventListener('click', (close)=> {
   close.target.parentElement.classList.remove("menu-open")
})


let val;
input.addEventListener('input', (e) => {
   val = e.target.value
   h2.style.display = "none"
    // return val;
})

search.addEventListener('click', (e) => {
    image.forEach((image) => {
        let id = image.id;
        let imgId;
        imageContainer.forEach((img)=> {
            img.style.display = "flex"
            imgId = image.id;
        })
        if(val == "smart" || val == "Smart" ){
           if(id == "image1"){
            image.src = "./images/smart.jpg"
           }
           else if(id == "image2"){
            image.src = "./images/smart1.jpg"
           }
           else if(id == "image3"){
            image.src = "./images/smart2.jpg"
           }
           else if(id == "image4"){
            image.src = "./images/smart3.jpg"
           }
        }
        else if(val == "bubu" || val == "Bubu"){
           if(id == "image1"){
            image.src = "./images/bubu.jpg"
           }
           else if(id == "image2"){
            image.src = "./images/masti.jpg"
           }
           else if(id == "image3"){
            image.src = "./images/bubu2.jpg"
           }
           else if(id == "image4"){
            image.src = "./images/sick.jpg"
           }
        }
        else if(val == "spiritual" || val == "Spiritual"){
           if(id == "image1"){
            image.src = "./images/spiritual.jpg"
           }
           else if(id == "image2"){
            image.src = "./images/spiritual1.jpg"
           }
           else if(id == "image3"){
            image.src = "./images/spiritual2.jpg"
           }
           else if(id == "image4"){
            image.src = "./images/spiritual3.jpg"
           }
        }
        else if(val == "kiss baby" || val == "Kiss Baby" || val == "Kiss baby"){
           if(id == "image1"){
            image.src = "./images/puchi.jpg"
           }
           else if(id == "image2"){
            image.src = "./images/puchi1.jpg"
           }
           else if(id == "image3"){
            image.src = "./images/puchi2.jpg"
           }
           else if(id == "image4"){
            image.src = "./images/puchi3.jpg"
           }
        }
        else if(val == "best mama" || val == "Best Mama" || val == "Best mama"){
           if(id == "image1"){
            image.src = "./images/best mama.jpg"
           }
           else if(id == "image2"){
            image.src = "./images/best mama1.jpg"
           }
           else if(id == "image3"){
            image.src = "./images/best mama2.jpg"
           }
           else if(id == "image4"){
            image.src = "./images/best mama3.jpg"
           }
        }
        else if(val == "crazy" || val == "Crazy" ){
           if(id == "image1"){
            image.src = "./images/crazy.jpg"
           }
           else if(id == "image2"){
            image.src = "./images/crazy1.jpg"
           }
           else if(id == "image3"){
            image.src = "./images/crazy2.jpg"
           }
           else if(id == "image4"){
            image.src = "./images/masti1.jpg"
           }
        }
        else if(val == "best son" || val == "Best Son" || val == "Best son"){
           if(id == "image1"){
            image.src = "./images/mumma's boy.jpg"
           }
           else if(id == "image2"){
            image.src = "./images/mumma's boy1.jpg"
           }
           else if(id == "image3"){
            image.src = "./images/spiritual3.jpg"
           }
           else if(id == "image4"){
            image.src = "./images/smart1.jpg"
           }
        }else {
            imageContainer.forEach((img)=> {
                img.style.display = "none"
            })
        }
        
    })
})