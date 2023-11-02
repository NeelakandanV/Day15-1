var bodyEle = document.querySelector('body')

var main = document.createElement('div')
main.classList.add("mainpar")
bodyEle.append(main)

var title = document.createElement('h3')
title.innerText = "Mini calculator"
main.append(title)

var screen = document.createElement('p')
main.append(screen)

var parentCon = document.createElement('div')
parentCon.classList.add('parent')

var btns = [1,2,'+',3,4,'-',5,6,'*',7,8,'/',0,'00','=','Del','c'];

for(let i of btns){
    let btndiv = document.createElement('div')
    let btn = document.createElement('button')
    btndiv.classList.add(`btn-${i}`)
    btn.setAttribute('onclick',"clicking(this)")
    btn.innerText = `${i}`
    btndiv.append(btn)
    parentCon.append(btndiv)
}
main.append(parentCon)

function clicking(event){
    par = document.querySelector('p')
    operator =['+','-','*','/']
    if(operator .includes(event.innerText) && operator .includes(par.innerText[par.innerText.length-1])){
        alert("Try to enter a number")
        par.innerText = par.innerText
    }
    else if(event.innerText=='c'){
        clear();
    }
    else if(event.innerText=='Del'){
        del(1)
    }
    else if(event.innerText=='='){
        par.innerText = eval(par.innerText)
    }
    else{
        par.innerText = par.innerText + event.innerText
    }
}

window.addEventListener('keyup',(event)=>{ 
    code = event.code
    key = event.key
    operator =['+','-','*','/']
    par = document.querySelector('p')
    if(( operator.includes(key)) && operator .includes(par.innerText[par.innerText.length-1])){
        alert("Try to enter a number")
    }
    else if(code.includes('Numpad')){
        par.innerText = par.innerText +key
    }
    else if(key.includes ('=')){
        par.innerText = eval(par.innerText)
    }
    else if(key.includes("c")){
        clear()
    }
    else if(code.includes("Delete")){
        del(1)
    }
    else{alert("Only numbers are allowed")}

})

function clear(){
    par.innerText = '';
}

function del(num){
    let slice = par.innerText.slice(0,par.innerText.length-`${num}`);
    par.innerText = slice;
}
