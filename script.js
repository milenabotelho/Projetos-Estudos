
var modalVideo = document.getElementById("abrir-tela")




function funcaoAbrirModal() {

    if (modalVideo.classList.contains("modal-fechado")) {
        modalVideo.classList.remove("modal-fechado")
        modalVideo.classList.add("modal-aberto")
    } else {
        modalVideo.classList.add("modal-aberto")
    }
}

function funcaoFecharModal() {

    if (modalVideo.classList.contains("modal-aberto")) {
        modalVideo.classList.remove("modal-aberto")
        modalVideo.classList.add("modal-fechado")
    } else {
        modalVideo.classList.add("modal-fechado")
    }


}
// function funcao1() {
//     alert("Sem dados no Momento S2")
// }

