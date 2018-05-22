const image = document.querySelector(".image")
const head = document.querySelector('.head')
const roger =document.querySelector('.cat1')
const bell = document.querySelector('.cat2')
const fido = document.querySelector('.cat3')
const kudo = document.querySelector('.cat4')
const desi = document.querySelector('.cat5')
const copybox = document.querySelector('.copybox')
const copyimage = document.querySelector('.copyimage')
const totalclicks = document.querySelector('.totalclicks')



roger.innerHTML = "Roger";
bell.innerHTML = "Bell";
fido.innerHTML = "Fido";
kudo.innerHTML = "Kudo";
desi.innerHTML = "Desi";

roger.addEventListener('click',function (e) {
    document.querySelector('.copybox img').src =  e.target.parentElement.querySelector('img').src;
    head.innerHTML = ""
    head.textContent ++
})
bell.addEventListener('click',function (e) {
    document.querySelector('.copybox img').src =  e.target.parentElement.querySelector('img').src;
    head.innerHTML = ""
    head.textContent ++
})
fido.addEventListener('click',function (e) {
    document.querySelector('.copybox img').src =  e.target.parentElement.querySelector('img').src;
    head.innerHTML = ""
    head.textContent ++
})
kudo.addEventListener('click',function (e) {
    document.querySelector('.copybox img').src =  e.target.parentElement.querySelector('img').src;
    head.innerHTML = ""
    head.textContent ++
})
desi.addEventListener('click',function (e) {
    document.querySelector('.copybox img').src =  e.target.parentElement.querySelector('img').src;
    head.innerHTML = ""
    head.textContent ++
})

copyimage.addEventListener('click',function() {
    head.textContent ++
})

copyimage.addEventListener('click',function() {
    totalclicks.textContent ++
})