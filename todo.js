const txtInput = document.getElementById('Inp');
const addBtn = document.getElementById('Add');
const result = document.querySelector('.reslut');

addBtn.addEventListener('click', txtin);

function txtin() {
  if (txtInput.value === '') return;

 
  const div = document.createElement('div');
  div.className = 're-div';

  div.innerHTML = `
    <p class="txt">${txtInput.value}</p>
    <button class="icon"><i class='bx bx-x'></i></button>
  `;
 

  div.querySelector('.icon').addEventListener('click', () => {
    div.remove(); // removes only this item
  });

  result.appendChild(div);
  
  txtInput.value = '';
}
