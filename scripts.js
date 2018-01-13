//tworzymy tablie ze slowami

var słowa = ["mysikrólik", "potrzos", "kopciuszek", "makolągwa", "gąsiorek", "cietrzew", "derkacz", "rybitwa", "puchacz", "żołna", "orzechówka", "pierwiosnek", "pomurnik", "trznadel", "jerzyk"];
	
// wybór losowego słowa

var słowo = słowa[Math.floor(Math.random() * słowa.length)];

//skonfiguruj tablice z odpowiedziami

var odpowiedzi = [];

for (var i = 0; i < słowo.length; i++) {
	odpowiedzi[i] = "_";
}

var pozostałeLitery = słowo.length;


// główna pętla gry


alert("Odgadnij nazwę ptaka");


while(pozostałeLitery > 0) {
 
    //pokaż graczowi biezacy wynik
    
	alert(odpowiedzi.join(" "));


	//wczytaj strzał użytkownika 

	var strzał = prompt("Podaj literę.");

	if (strzał === null) {
		break;
	} else if (strzał. length !== 1) {
		alert("Proszę podaj tylko jedną literę.");
	} else {

		for (var j = 0; j < słowo.length; j++) {
			if (słowo[j] === strzał) {
				odpowiedzi[j] = strzał;
				pozostałeLitery--;
			}
		}
	} 
}

// pokaż odpowiedz i gratuluj

alert(odpowiedzi.join(" "));
alert("Dobra robota! Szukany ptak to " + słowo);










