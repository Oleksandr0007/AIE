let menuBtn = document.getElementById('menu-btn');
let menu = document.getElementById('transform');
let linkbutton = document.getElementById('link-button');
let listlink = document.getElementById('list-link');
let linkbutton2 = document.getElementById('link-button2');
let listlink2 = document.getElementById('list-link2');
let linkbutton3 = document.getElementById('link-button3');
let listlink3 = document.getElementById('list-link3');
let linkbutton4 = document.getElementById('link-button4');
let listlink4 = document.getElementById('list-link4');
let linkbutton5 = document.getElementById('link-button5');
let listlink5 = document.getElementById('list-link5');
let footer = document.getElementById('footer');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active-btn');
    menu.classList.toggle('active');
    document.body.classList.toggle('hide-content');
})

linkbutton.addEventListener('click', function () {
    listlink.classList.toggle('listopen');
    listlink2.classList.remove('listopen');
    listlink3.classList.remove('listopen');
    listlink4.classList.remove('listopen');
    listlink5.classList.remove('listopen');
})
linkbutton2.addEventListener('click', function () {
    listlink2.classList.toggle('listopen');
    listlink.classList.remove('listopen');
    listlink3.classList.remove('listopen');
    listlink4.classList.remove('listopen');
    listlink5.classList.remove('listopen');
})
linkbutton3.addEventListener('click', function () {
    listlink3.classList.toggle('listopen');
    listlink2.classList.remove('listopen');
    listlink.classList.remove('listopen');
    listlink4.classList.remove('listopen');
    listlink5.classList.remove('listopen');
})
linkbutton4.addEventListener('click', function () {
    listlink4.classList.toggle('listopen');
    listlink2.classList.remove('listopen');
    listlink3.classList.remove('listopen');
    listlink.classList.remove('listopen');
    listlink5.classList.remove('listopen');
})
linkbutton5.addEventListener('click', function () {
    listlink5.classList.toggle('listopen');
    listlink2.classList.remove('listopen');
    listlink3.classList.remove('listopen');
    listlink4.classList.remove('listopen');
    listlink.classList.remove('listopen');
})


// popup

const openModalButtons   =  document.querySelectorAll('[data-modal-target]')
const closeModalButtons  =  document.querySelectorAll('[data-close-button]')
const overlay            =  document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// question
document.getElementById("close").onclick    =  change;
document.getElementById("open").onclick     =  changerev;
document.getElementById("close2").onclick   =  changee;
document.getElementById("open2").onclick    =  changerev2;
document.getElementById("close3").onclick   =  changeee;
document.getElementById("open3").onclick    =  changerev3;


const open       =  document.getElementById("open")
const close      =  document.getElementById("close")
const open2      =  document.getElementById("open2")
const close2     =  document.getElementById("close2")
const open3      =  document.getElementById("open3")
const close3     =  document.getElementById("close3")

function change() {
    open.style.display = "block";
    close.style.display = "none";
}
function changerev() {
    open.style.display = "none";
    close.style.display = "block";
}

function changee() {
    open2.style.display = "block";
    close2.style.display = "none";
}
function changerev2() {
    open2.style.display = "none";
    close2.style.display = "block";
}

function changeee() {
    open3.style.display = "block";
    close3.style.display = "none";
}
function changerev3() {
    open3.style.display = "none";
    close3.style.display = "block";
}