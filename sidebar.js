const bar = document.querySelector(".fa-bars")
const times = document.querySelector(".fa-times")
const menuSlide = document.querySelector(".menu-slide")

bar.addEventListener("click", ()=>{
    menuSlide.classList.add("show")
})
times.addEventListener("click", ()=>{
    menuSlide.classList.remove("show")
})



const content = document.querySelector(".content")
const stories = document.querySelectorAll(".story")
const articles = document.querySelectorAll(".article")

content.addEventListener("click", (e)=>{
    const id = e.target.dataset.id
    if(id){
        stories.forEach((story)=>{
            story.classList.remove("active")
        })
        e.target.classList.add("active")
        menuSlide.classList.remove("show")


        articles.forEach((article)=>{
            article.classList.remove("active")
        })
        const element = document.getElementById(id)
        element.classList.add("active")
    }
})










