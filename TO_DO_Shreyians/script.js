let taskData={}


const todo=document.getElementById('to-do');
const progress=document.getElementById('progress');
const done=document.getElementById('done');
// console.log(todo,progress,done);
const columns=[todo,progress,done];
let dragElement=null;

function addTask(title,desc,column){
    const div=document.createElement('div');   
    div.classList.add('task');  
    div.setAttribute('draggable','true');
    div.innerHTML=`<h2 class="task-title">${title}</h2>
    <p class="task-desc">${desc}</p>    
    <button class="delete-btn">Delete</button>`;
    column.appendChild(div);    
    div.addEventListener('dragstart',(e)=>{
        dragElement=div;    
    }   );
    const deletebtn=div.querySelector('.delete-btn');
    deletebtn.addEventListener('click',()=>{
        div.remove();
        updateTaskCount();
        localStorage.setItem('tasks',JSON.stringify(taskData));
    })
}   

function updateTaskCount(){

 columns.forEach(col=>{
            const tasks=col.querySelectorAll('.task');
            const count=col.querySelector('.right')
            taskData[col.id]=Array.from(tasks).map(task=>{
                return {
                    title:task.querySelector('h2').innerText,
                    desc:task.querySelector('p').innerText
                }
            })
            count.innerText=tasks.length;
        });
}


if(localStorage.getItem('tasks')){
    const data=JSON.parse(localStorage.getItem('tasks'));
    for(const col in data){
        const column=document.querySelector(`#${col}`);
        data[col].forEach(task=>{
          
            addTask(task.title,task.desc,column);
        });

        const tasks=column.querySelectorAll('.task');
        const count=column.querySelector('.right');
        count.innerText=tasks.length;
    }

         

}
   



const tasks=document.querySelectorAll('.task');
tasks.forEach(task=>{
    task.addEventListener('dragstart',(e)=>{
        dragElement=task;
    });
});

function adddragEventsOnColumn(column){
    column.addEventListener('dragenter',(e)=>{
        e.preventDefault();
        column.classList.add('hover-over');
    })
    column.addEventListener('dragleave',(e)=>{
        e.preventDefault();
        column.classList.remove('hover-over');
    }   )
    column.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })
   column.addEventListener('drop',(e)=>{

        e.preventDefault();
                column.appendChild(dragElement);

       
        column.classList.remove('hover-over');

        updateTaskCount();
        localStorage.setItem('tasks',JSON.stringify(taskData));
    })
}
adddragEventsOnColumn(todo);
adddragEventsOnColumn(progress);
adddragEventsOnColumn(done);    

const toggleModalBtn=document.getElementById('toggle-modal');
const modalBg=document.querySelector('.modal .bg');
const modal=document.querySelector('.modal');

toggleModalBtn.addEventListener('click',()=>{
    modal.classList.toggle('active');
})
modalBg.addEventListener('click',()=>{
    modal.classList.remove('active');
})

const addTaskBtn=document.getElementById('add-new-task');
addTaskBtn.addEventListener('click',()=>{
    const taskTitle=document.querySelector('#task-title').value;
    const taskDesc=document.querySelector('#task-desc').value;
    addTask(taskTitle,taskDesc,todo);
    modal.classList.remove('active');
 
    updateTaskCount();
        localStorage.setItem('tasks',JSON.stringify(taskData));
       div.addEventListener('dragstart',(e)=>{
        dragElement=div;
    }   );
})