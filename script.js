const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener('click', add);
form.addEventListener('change', save);

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0,5);
  console.log(today);
  const dayExists = nlwSetup.dayExists(today);

  if (true === dayExists) {
    alert('dia já incluso');
    return
  }
  nlwSetup.addDay(today);
}

function save() {
 window.localStorage.setItem('criando@osave', JSON.stringify(nlwSetup.data));


}

const data = JSON.parse(localStorage.getItem('criando@osave')) || {};

nlwSetup.setData(data);
nlwSetup.load();




