const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const themeToggler = document.querySelector("#theme-toggler")

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')
    themeToggler.querySelector("span:first-child").classList.toggle('active')
    themeToggler.querySelector("span:last-child").classList.toggle('active')
})

// drop down menu
const dropMenu = (btn) => {
    btn.querySelector("span").classList.toggle("flip_180")

    let dropdown = document.querySelector("ul.drop-down-content")
    dropdown.classList.toggle("show-drop-down")

    
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.role')) {
        try {
            console.log('test');
            // document.querySelector(".drop-down-content").style.display = 'none'
        } catch (error) {

        }
    }
}