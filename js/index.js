let width = window.innerWidth

let avatar=document.querySelector('.div2-1')

let services=document.querySelectorAll('.s')
let paragrafo=document.getElementById('paragrafoService')

let s=document.querySelector('.services')

/* console.log(typeof(services))
console.log(services[0]) */

let novos=['Advanced knowledge of Adobe Photoshop, Lumion, SketchUp, AutoCAD','Basic knowledge of Adobe Illustrator, Adobe Lightroom, Revit, WordPress, Cinema4d, SolidWorks, 3dsMax']


for (const key in services) {
    services[key].aNovo=novos[key]
}


let largura=width*0.19
avatar.style.width=largura+'px'
avatar.style.height=largura+'px'

window.onresize=function(width){

    if (width.currentTarget.innerWidth>427) {
        let largura=width.currentTarget.innerWidth*0.19
        avatar.style.width=largura+'px'
        avatar.style.height=largura+'px'     
    }
    else{
        avatar.style.width='200px'
        avatar.style.height='200px'
    }
}


window.onload=()=>{

    function div2(valor){
        let divs=document.querySelectorAll('.aparecer')

        if (valor<=520&&valor>=420) {
            divs.forEach(element => {
                element.style.opacity='0.2'
            });
        }

        if (valor<420&&valor>=320) {
            divs.forEach(element => {
                element.style.opacity='0.40'
            });
        }

        if (valor<220&&valor>=-2000) {
            divs.forEach(element => {
                element.style.opacity='1'
            });
        }
    }


    services.forEach(element => {
        element.addEventListener('mouseover',() => {
            console.log(element.aNovo)
            paragrafo.innerText=element.aNovo
        })
    });

    s.addEventListener('mouseout',() => {
        paragrafo.innerText=''
    })

    document.addEventListener('scroll',() => {
        let valor=document.querySelector('.div2-2').getBoundingClientRect()['y']
        console.log(valor)
        div2(valor)
    })

}