
const guestForm = document.getElementById('guestForm')
const guestList = document.getElementById('guestList')
const guestNameInput = document.getElementById('guestNameInput')
const guestCategory = document.getElementById('guestCategory')



 guestForm.addEventListener('submit', function(event){
    event.preventDefault();

    const name = guestNameInput.value.trim();
    const category = guestCategory.value;
    
    if (name ==='')return;

    if(guestList.children.length >= 10 ){
        alert('Guest list limit reached (maximum 10)');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
       <strong> ${name} </strong>
       <span class= "tag ${category.toLowerCase()}"> ${category}</span>
       <button class="rsvp-btn">Not Attending</button>
       <button class="edit-btn">Edit</button>
       <button class="delete-btn">remove</button>
       <small class="timestamp">${new Date().toLocaleTimeString()}</small>
   ` ;   
    guestList.appendChild(li)
    
    guestNameInput.value ='';
    guestCategory.selectedIndex =0;
   

   

 })
 // deliting btn
  guestList.addEventListener('click', function(event){
    const target = event.target;
 
    if(target.classList.contains('delete-btn')){
        target.parentElement.remove();
    }

    // togggle rsvp
    if(target.classList.contains('rsvp-btn')){
        if(target.textContent === 'Not Attending'){
            target.textContent = 'Attending';
            target.style.backgroundColor = 'lightblue';
        } else{
            target.textContent ='Not Attending';
            target.style.backgroundColor = '';
        }
    }
  //edit btn
  if(target.classList.contains('edit-btn')){
    const li = target.parentElement;
    const nameElement = li.querySelector('strong');
    const currentName = nameElement.textContent;

    const newName = prompt('Edit guest name: ', currentName)
    if(newName){
        nameElement.textContent = newName;
    }
  } 
})
 