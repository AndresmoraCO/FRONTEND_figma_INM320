// fetch('assets/data/content.json')
//   .then(response => response.json())
//   .then(data => {
//     const container = document.getElementById('json-cards-container');

//     data.forEach(item => {
//       const card = document.createElement('div');
//       card.className = 'col-md-6';
//       card.innerHTML = `
//         <div class="card shadow h-100" style="border-radius: 10px;">
//             <div class="card-body d-flex flex-column justify-content-between">
//             <div>
//                 <h5 class="card-title mb-2">${item.title}</h5>
//                 <p class="card-text text-muted">${item.description}</p>
//             </div>
//             <div class="mt-3">
//                 <span class="badge bg-info me-2">${item.badge}</span>
//                 <small class="text-secondary">${item.status}</small>
//             </div>
//             </div>
//         </div>
//         `;

//       container.appendChild(card);
      
//     });
//   })
//   .catch(error => {
//     console.error('nope', error);
//   });


// console.log(
//     'test this'
// );


// Asyn/await

async function getData() {
    try {
        const foobar = await fetch ('/assets/data/content.json');
        // console.log ( foobar );
        const data = await foobar.json();
        console.log (data);
        console.log (data.site_name);

        const heading = document.querySelector ('h4')
        heading.innerHTML = data.site_name;


        // Projects (cards)
        const projectsContainer = document.getElementById('json-cards-container');
        projectsContainer.innerHTML = '';
        data.projects.forEach(project => {
            projectsContainer.innerHTML += `
                <div class="col-md-6 mb-4">
                    <div class="card shadow h-100">
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                            <span class="badge bg-${project.badge === 'Urgent' ? 'danger' : 'info'}">${project.badge}</span>
                            <span class="badge bg-${project.status === 'Completed' ? 'success' : 'warning'}">${project.status}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // tickets card updated
        document.querySelector('#tickets-title').textContent = data.tickets_title;
        document.querySelector('#tickets-subtitle').textContent = data.tickets_subtitle;

            // tickets´ list
            const ticketsList = document.querySelector('#tickets-list');
            ticketsList.innerHTML = ""; 

            data.tickets.forEach((ticket, index, array) => {
                const li = document.createElement("li");
                li.classList.add("ticket-item", "d-flex", "justify-content-between",  "py-2", "w-100");

                li.innerHTML = `
                    <span class="fw-medium">${ticket.label}</span>
                    <span class="text-muted text-end ms-3 flex-shrink-0">${ticket.count}</span>
                `;

                ticketsList.appendChild(li);

                if (index < array.length - 1) {
                    const hr = document.createElement("hr");
                    ticketsList.appendChild(hr);
                }
                });

                    // Actualiza títulos de la card de tasks
            document.querySelector('#tasks-title').textContent = data.tasks_title;
            document.querySelector('#tasks-subtitle').textContent = data.tasks_subtitle;

                // Lista de tasks
                const tasksList = document.querySelector('#tasks-list');
                tasksList.innerHTML = ""; // limpia tasks anteriores si hay

                // Task especial para crear nueva
                const newTaskRow = document.createElement("div");
                newTaskRow.classList.add("task-row", "border-bottom", "mt-4");
                newTaskRow.innerHTML = `
                <div class="d-flex align-items-center">
                    <span class="text-muted" style="font-size: 14px; letter-spacing: 0.2px;">Create new task</span>
                </div>
                <div class="plus-icon">
                    <div class="horizontal-line"></div>
                    <div class="vertical-line"></div>
                </div>
                `;
                tasksList.appendChild(newTaskRow);

                // Genera cada tarea desde el JSON
                data.tasks.forEach(task => {
                const taskRow = document.createElement("div");
                taskRow.classList.add("task-row", "border-bottom");

                // define si la tarea está marcada como completada
                const checkboxClass = task.completed ? "checkbox completed" : "checkbox";
                const checkboxSVG = task.completed
                    ? `<svg class="inner-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                    </svg>`
                    : "";

                taskRow.innerHTML = `
                    <div class="d-flex align-items-center">
                    <div class="${checkboxClass}">${checkboxSVG}</div>
                    <span>${task.label}</span>
                    </div>
                    <div class="badge ${task.badge.toLowerCase()}">${task.badge}</div>
                `;
                tasksList.appendChild(taskRow);
                });

                

            

        }

    catch (error) {
        console.warn (`Nope: ${error}`);
     }    
}

getData ();
