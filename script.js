function AddTask() {
    if(document.getElementById('TextTask').value != ''){
        const Lista = document.getElementById('TaskList');
  
        // Crear un nueva div <div>
        const div = document.createElement('div');
        div.className += "Task";
        div.id += 'Lista';
        div.style.padding = '0px 20px';
        div.style.border = '2px solid #FFFFFF';
        div.style.backgroundColor = 'rgb(160, 207, 229)';
        div.style.borderRadius = '10px';
        div.style.marginBottom = '5px';
        Lista.appendChild(div);

        // Crear elementos dentro del div 
        const input = document.createElement('input');
        input.style.width = '15%';
        input.className = 'myCheck';
        input.type = 'checkbox';
        input.addEventListener('change', function() {
            if (this.checked) {
              text.style.textDecoration = 'line-through';
              text.style.color = '#FFFFFF'
            } else {
                text.style.textDecoration = 'none';
                text.style.color = '#000000'
            }
        });
        const text = document.createElement('p');
        text.style.width = '60%';
        text.style.textAlign = 'initial';
        text.style.fontSize = '20px';
        text.textContent = document.getElementById('TextTask').value;
        const Delete = document.createElement('button');
        Delete.className = 'btnDelete';
        Delete.id= 'btnDelete';
        Delete.style.width = '25%';
        Delete.textContent = 'Delete';
        Delete.addEventListener('click', function(){
            div.remove();
        });

        div.appendChild(input);
        div.appendChild(text);
        div.appendChild(Delete);
        document.getElementById('TextTask').value = '';
    }
}

const btnAddTask = document.getElementById('NewTask');
btnAddTask.addEventListener('click', AddTask);
