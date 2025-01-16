 const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');


function addTask(){
    if(inputBox.value==''){
        alert('You must write something');
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        //for displaying cross icon
        //Create a span elemnt for the remove button
        let removeBtn=document.createElement('span');
        removeBtn.textContent='x';//'x' symbol
        //removeBtn.className='remove-btn';
        
        
        li.appendChild(removeBtn)
        removeBtn.onclick=function(){
            li.remove();
    
            }

        //checked class
        li.onclick=function(){
            li.classList.toggle('checked');
        };
        // listContainer.appendChild(li)
        inputBox.value='';
    }
    // inputBox.value='';
}
inputBox.onkeydown=function(e){
    if(e.key==='Enter'){
        addTask()
    }
};   
