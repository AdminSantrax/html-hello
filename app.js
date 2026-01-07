const btnGrid   = document.getElementById('btn-grid');
const btnList   = document.getElementById('btn-list');
const vistaGrid = document.getElementById('vista-grid');
const vistaPosts= document.getElementById('vista-posts');

function activarGrid() {
  btnGrid.classList.add('active');
  btnList.classList.remove('active');

  vistaGrid.classList.remove('d-none');
  vistaPosts.classList.add('d-none');
}

function activarLista() {
  btnList.classList.add('active');
  btnGrid.classList.remove('active');

  vistaPosts.classList.remove('d-none');
  vistaGrid.classList.add('d-none');
}

btnGrid.addEventListener('click', (evento) => {
  evento.preventDefault();
  activarGrid();
});

btnList.addEventListener('click', (evento) => {
  evento.preventDefault();
  activarLista();
});
