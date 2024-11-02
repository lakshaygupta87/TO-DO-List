let input=document.querySelector('input');
let btn=document.querySelector('button');
let container=document.querySelector('.list-container');
let count=document.querySelector("#count")


btn.addEventListener("click",function(){
 
 

if(input.value !==""){    
    let div=document.createElement("div")
    div.classList.add("items")
    let p=document.createElement('p')
    p.textContent=input.value
    let edit=document.createElement("button")
    edit.setAttribute("id","edit")
    edit.innerHTML=`<i class="fa-solid fa-pen-to-square"></i>`
    let del=document.createElement("button")
    del.setAttribute("id","delete")
    del.innerHTML=`<i class="fa-solid fa-trash "></i>`
    container.appendChild(div)
    div.appendChild(p)
    div.appendChild(edit)
    div.appendChild(del)

   counting()
    console.log(del)

    del.onclick=function(){

        div.remove()

        counting()
    }

    edit.onclick=function(){
        if(p.isContentEditable){
            p.contentEditable=false
    edit.innerHTML=`<i class="fa-solid fa-pen-to-square"></i>`

        }
        else{
            p.contentEditable=true
            edit.innerHTML=`<i class="fa-solid fa-message"></i>`
            
            p.focus()
        }
    }

    input.value=''

}
})

function counting(){
 let items=document.querySelectorAll(".items")
//  console.log(items.length)

 count.textContent=items.length
}

