const menuBtn = document.querySelector("#menu-btn")
const sideMenu = document.querySelector("aside")
const closeBtn = document.querySelector("#close-btn")

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})
try {

    document.querySelector(".popup-holder .card .close-btn span").addEventListener("click", () => {
        document.querySelector(".popup-holder").classList.add("hide")
    })

    document.querySelector("#add-note").addEventListener("click", () => {
        document.querySelector(".popup-holder").classList.remove("hide")
    })
    // show sidebar


} catch (error) {

}

// change theme
let themeToggler = document.querySelector("#theme-toggler")
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

// ADD FORM ROW
let i = 1;

const get_row_num = (id) => {
    return id.split('-')[2]
}

const create_row = (type, row_num) => {
    i++;
    let row = document.createElement('div')
    row.setAttribute('id', `row-${++row_num}`)
    row.setAttribute('class', 'form-row')
    if (type === 'med') {
        row.innerHTML = `
            <div>
                <label for="">Drug Name</label>
                <input class="primary" type="text" placeholder="Enter Drug">
            </div>

            <div>
                <label for="">Quantity Per day</label>
                <input class="primary" type="numebr" value="1">
            </div>

            <div>
                <label for="">Usage Description</label>
                <textarea class="primary" rows="1" placeholder="Enter Descpritption"></textarea>
            </div>

            <div>
                <span id="delete-row-${row_num}" onclick=delete_row(this.id) class="material-icons-sharp">delete</span>
            </div>
        `
    } else if (type === 'trait') {
        row.innerHTML = `
            <div>
                <label for="">Traitement</label>
                <input class="primary" type="text" placeholder="Enter Traitement">
            </div>

            <div>
                <label for="">Traitement Description</label>
                <textarea class="primary" rows="1" placeholder="Enter Descpritption"></textarea>
            </div>

            <div>
                <label for = "">Traitement Price</label> 
                <input class = "primary" type = "number" placeholder = "Enter Price"></input>
            </div>

            <div>
                <span id="delete-row-${row_num}" onclick=delete_row(this.id) class="material-icons-sharp">delete</span>
            </div>
        `
    }
    return row
}



const delete_row = (id) => {
    let row_id = `#row-${get_row_num(id)}`
    let row = document.querySelector(row_id)
    row.remove()
}


const add_row = (type) => {
    let new_row = create_row(type, i)
    let form_holder = document.querySelector(`#form-${type}>.rows`);
    form_holder.appendChild(new_row)
}
// show forms
const show_form = (id) => {
    switch (id) {
        case "insrurance-btn":
            document.querySelector("main .section-1 .rows.privacy-settings form").classList.toggle("hide-from")
            break;

        case "become-doctor-btn":
            document.querySelector(".rigth .section-1 .rows.privacy-settings form.become-doctor-form").classList.toggle("hide-from")
            break

        case "become-pharmacist-btn":
            document.querySelector(".rigth .section-1 .rows.privacy-settings form.become-pharmacist-form").classList.toggle("hide-from")
            break

        default:
            break;
    }
}

// Editing
const switching = (i) => {
    document.querySelectorAll(`.form-row input, .form-row button h4 `).forEach(inp => {
        inp.classList.remove('edit-on')
        inp.setAttribute("readonly", "")
        inp.classList.remove('red-color')
    })

    document.querySelector(`.form-row button#edit-${i} h4`).classList.add('red-color')
    inp = document.getElementById("input-" + i);
    inp.removeAttribute("readonly")
    inp.classList.toggle('edit-on')
}

all_form_elements = document.querySelectorAll(`.form-row input, .form-row button h4 `)


window.addEventListener("click", e => {
    clicked = false
    for (let i = 0; i < all_form_elements.length; i++) {
        if (e.target === all_form_elements[i]) {
            clicked = true
            break
        }
    }
    if (!clicked) {
        document.querySelectorAll(`form.user-settings .form-row input, .form-row button h4, form.become-doctor-form .form-row input, form.become-pharmacist-form .form-row input`).forEach(inp => {
            inp.classList.remove('edit-on')
            inp.setAttribute("readonly", "")
            inp.classList.remove('red-color')
        })
    }
})
try {
    const but1 = document.querySelectorAll("main .doctor-card.card .doc-payment .buttons a div")
    const but2 = document.querySelectorAll("main .doctor-card.card .doc-payment .buttons a:last-child div")

    for (let i = 0; i < but1.length; i += 2) {
        but1[i].addEventListener('mouseover', () => {
            but2[i / 2].classList.add('but1')
        })

        but1[i].addEventListener('mouseout', () => {
            but2[i / 2].classList.remove('but1')
        })
    }


} catch (error) {

}


