let estado = false;
const iconCorreo = document.getElementById("iconCorreo");
const iconDocument = document.getElementById("iconDocument");
const btnDownload = document.getElementById("btnDownload");
const btnSend = document.getElementById("btnSend");

btnSend.addEventListener("click", e =>{
    window.location.href = "mailto:julietacastillo326@gmail.com?Subject=Interesado%20Por%20CV";
})
btnDownload.addEventListener("click", e=>{
    window.location.href = "../doc/CVJulietaTatianaCastillo.pdf"
})

btnSend.addEventListener("mouseover", e =>{
    animacion(iconCorreo)
})
btnDownload.addEventListener("mouseover", e =>{
    animacion(iconDocument)
})
const animacion = (item) =>{
    item.animate(
        [
            //{background : "red"}
            {transform: "rotate(0deg) rotate(30deg) rotate(-55deg) rotate(0deg)"},
            {transform: "rotate(0deg) rotate(-30deg) rotate(55deg) rotate(0deg)"},
            {transform: "rotate(0deg)"},
        ],
        {
            duration: 200, 
            fill:"both",
        }
    )
}

const activeAnimation = () =>{
    const spanCenter = document.getElementById("spanCentro");
    const spanTop = document.getElementById("spanArriba");
    const spanBottom = document.getElementById("spanAbajo");
    const circle = document.getElementById("circle");
    const btnSpan = document.getElementById("btnSpan");
    const menu = document.getElementById("menu");
    if(estado){
        menu.animate(
            [
                {color: 'rgba(255, 255, 255, 0)'}
            ],
            {
                duration: 400,
                fill: "forwards"
            }
        )
        spanTop.animate(
            [
                {transform: 'translateY(0) rotate(0deg)'}
            ],
            {
                duration: 1000,
                fill: "forwards"
            }
        )
        spanCenter.animate(
            [
                {transform: 'rotate(0deg)'}
            ],
            {
                duration: 1000,
                fill: "forwards",
            }
        )
        spanBottom.animate(
            [
                {transform: 'translateY(0) rotate(0deg)'}
            ],
            {
                duration: 1000,
                fill: "forwards"
            }
        )
        circle.animate(
            [
                {width: '80px', height: '80px', top:'10px', right: '10px'}
            ],
            {
                duration: 1000,
                fill: "forwards"
            }
        )
        btnSpan.animate(
            [
                {transform: 'translateY(0%) translateX(0%)'}
            ],
            {
                duration: 1000,
                fill: "forwards"
            }
        )
        estado = false;
    }
    else{
        circle.animate(
            [
                {width: '400px', height: '400px', top:'-15%', right: '-5%'}
            ],
            {
                duration: 600,
                fill: "forwards"
            }
        )
        spanTop.animate(
            [
                {transform: 'translateY(15px) rotate(40deg)'}
            ],
            {
                duration: 800,
                fill: "forwards"
            }
        )
        spanCenter.animate(
            [
                {transform: 'rotate(-40deg)'}
            ],
            {
                duration: 800,
                fill: "forwards"
            }
        )
        spanBottom.animate(
            [
                {transform: 'translateY(-15px) rotate(-40deg)'}
            ],
            {
                duration: 800,
                fill: "forwards"
            }
        )
        menu.animate(
            [
                {color: 'rgb(255, 255, 255)'}
            ],
            {
                delay: 600,
                duration: 1000,
                fill: "forwards"
            }
        )
        estado = true;
    }
}

