
// Viršutinis (baltas) x mygtukas įjungia įrenginį ir televizoriuje 
// atvaizduojama pasisveikinimo žinutė, 
// taip pat šis mygtukas atsakingas už konsolės išjugimą. 
// Tuo atveju rodoma atsisveikinimo žinutė.

function TurnOn(){
    const welcome = document.getElementById('Hello');
    const bye = document.getElementById('Goodbye')
    if(welcome.style.visibility != 'visible'){
        welcome.style.visibility = "visible"; 
    }
    else 
        welcome.style.visibility = 'hidden'
        
    }

   

// Y (geltonas) mygtukas įjungia televizijos programą.

function show_hide(){
    frm = document.getElementById('frame');
    if(frm.style.visibility != 'visible'){
        frm.style.visibility = "visible";
    }
    else{
        frm.style.visibility = "hidden";
    }
}

// B (raudonas) mygtukas grąžina vartotoją į pasisveikinimo ekraną.
function Hello(){
    hey = document.getElementById('Hello');
    if(hey.style.visibility != 'visible'){
        hey.style.visibility = "visible";
    }
    else{
        hey.style.visibility = "hidden";
        
    }
}
   
// A (žalias) mygtukas įjungia google.com puslapį.
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe

function GotoLink (link) {
    console.log(link.value)
    location.href = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe';
 }

 //X (mėlynas) mygtukas atvaizduoja galimų nusipirkti 
 //žaidimų sąrašą. Prie kiekvieno žaidimo rodoma nuotrauka, 
 //pavadinimas ir kaina. Žaidimus patalpinkite masyve.

function ProductList(){
    list = document.getElementById('table');
    if(list.style.visibility != 'visible'){
        list.style.visibility = 'visible'
    } else {
        list.style.visibility = 'hidden'
    }
}
