const topCorner= document.querySelector('.top-corner');
const navLinks = document.getElementById('nav-links')
const body = document.querySelector("body");
const toggleNodes = document.querySelectorAll('.toggle')


const toggle = () =>{
    toggleNodes.forEach(node => {
        node.classList.toggle("hide")
    })
    navLinks.classList.toggle("nav-links-toggle")
}

topCorner.addEventListener("click",toggle)


