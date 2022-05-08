const show_popup = (button) => {
    let type = button.getAttribute('type')
    let pop_up;
    if (type === "doctor") {
        pop_up = document.querySelector(".popup-holder.doctor")
    } else if (type === "pharmacy") {
        pop_up = document.querySelector(".popup-holder.pharmacy")
    }
    pop_up.classList.toggle('hide')
}