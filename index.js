document.getElementById('btn').addEventListener('click' , function(){
    const taskinput = document.getElementById('taskinput').value;
    
    if(taskinput !==''){
        const li = document.createElement('li')
        li.textContent =taskinput;
        const deletBtn = document.createElement('button');
        deletBtn.textContent = '  Delet   ';
        deletBtn.addEventListener('click',function(){
            li.remove();
        })
        li.appendChild(deletBtn);
        document.getElementById('tasklist').appendChild(li);
        taskinput.value ='';
    }
})