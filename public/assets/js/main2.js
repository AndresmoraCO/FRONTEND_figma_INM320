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

        // nav holder
        const nav_holder = document.querySelector ( 'ul.nav');

        console.log ( data.main_nav);
        data.main_nav.forEach( menu_item => {
            console.log (menu_item);

            const new_list_item = document.createElement ("li");

            new_list_item.innerHTML = `<a href="${menu_item.url}">${menu_item.text}`;

            nav_holder.appendChild(new_list_item);
        });
    } 
    catch (error) {
        console.warn (`Nope: ${error}`);
     }    
}

getData ();
