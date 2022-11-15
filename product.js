let grid = document.querySelector(".products");
let filterinput = document.getElementById("filterinput");



fetch('./database/store.json')
    .then(res => res.json())
    .then(json => {

        //itterating products
        for (let value of json) {

            addElement(grid, value)
        }

    });




// add enventlistner

filterinput.addEventListener('keyup', filterproducts);

function filterproducts() {
    let filtervalue = filterinput.value.toUpperCase();
    let item = grid.querySelectorAll('.item');
    //console.log(filtervalue);

    for (let i = 0; i < item.length; i++) {

        let span = item[i].querySelector('.title');

        if (span.innerHTML.toUpperCase().indexOf(filtervalue) > -1) {
            item[i].style.display = "initial";
        } else {
            item[i].style.display = "none";
        }
    }
}




//  get the value from api and create dynamic element

function addElement(appendin, value) {
    let div = document.createElement('div');
    div.className = "item justify-self-center";

    let { image, title, category, price } = value;

    div.innerHTML = `
    <img src="${image}">
    <div class="text-center py-3 font-poppins">
        <h1 class="text-lg title">${title}</h1>
        <a href="#" class="block"><span class="text-sm text-red-400">${category}</span></a>
        <span class="block py-3">$ <span class="text-md">${price}</span></span>
        <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Buy Now</button>
    </div>
    `
    appendin.appendChild(div);
}