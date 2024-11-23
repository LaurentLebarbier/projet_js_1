let bonjour = document.getElementById('b1')
let ajouter = document.getElementById('b2')

bonjour.addEventListener('click', alerte);
ajouter.addEventListener('click', ajout);

function alerte(){
    alert('bonjour');
}
function ajout(){
    let para = document.createElement('p')
    para.textContent = 'Paragraphe ajouté';
    document.body.appendChild(para);
}
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
}
