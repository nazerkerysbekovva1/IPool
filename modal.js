let modal = document.querySelector('.modal-window')
let modalOpen = () => {
    // modal.style.display = 'flex'
    modal.classList.add('open')
}

let imgModal = document.querySelector('#img-modal')
let showImgModal = (elem) =>{
    imgModal.style.display = 'flex'
    let showImg = imgModal.querySelector('img')
    let image = elem.querySelector('img').src;
    showImg.src = image
}
function closeImgModal(){
    imgModal.style.display = 'none'
}