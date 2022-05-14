back_to_recent = (id) => {
    id = id.split("-")[1]
    document.getElementById(`conv-${id}`).classList.add('hide')
    document.querySelector(".recent-messages").classList.remove("hide")
}

show_conv = (id) => {
    id = id.split("-")[1]
    document.querySelectorAll(".conversation.card").forEach(conv => {
        conv.classList.add('hide')
    })
    document.getElementById(`conv-${id}`).classList.remove('hide')
    if (window.innerWidth < 768) {
        document.querySelector(".recent-messages").classList.add("hide")
    }
}