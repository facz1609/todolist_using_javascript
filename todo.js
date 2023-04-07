window.onload = function(){
    let newtask = document.getElementById('newtask')
    let addtask = document.getElementById('addtask')
    let todolist = document.getElementById('todolist')
    
    addtask.onclick = function(){

        let li = document.createElement('li')

        
        //ADD the  X button
        let xbtn = document.createElement('button')
        xbtn.innerText = 'ⓧ'
        xbtn.onclick = function(event){
            console.log(event.target.parentElement)
            event.target.parentElement.remove()
            // event.target = xbutton 
            // event .target.parentElement = <li> = list item
        }

        //add the upbtn
        let upBtn =  document.createElement('button')
        upBtn.innerText = '⬆️'
        upBtn.onclick = function(event){
            // event.target = upBtn
            //  event.target.parentElement = the <li> item
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement, //insert this element 
                event.target.parentElement.previousElementSibling //before its previous element
            )
        }

        //add the downbtn
        let dnBtn =  document.createElement('button')
        dnBtn.innerText = '⬇️'
        dnBtn.onclick = function(event){
            // event.target = upBtn
            //  event.target.parentElement = the <li> item
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling,//insert the next sibling
                event.target.parentElement //before the current element
            )
        }


        // add the task text
        let taskspan = document.createElement('span')
        taskspan.innerText = newtask.value
        
        li.append(upBtn)
        li.append(dnBtn)
        li.appendChild(xbtn)
        li.appendChild(taskspan)
        todolist.appendChild(li)
    }
}