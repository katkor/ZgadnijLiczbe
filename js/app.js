var randomNumber = Math.floor((Math.random() * 100) + 1);
console.log(randomNumber);

var form = document.getElementsByTagName('form')[0];

var guessCounter = 0;
var counter = document.getElementsByTagName('span')[0];
var button = document.getElementsByTagName('button')[0];



form.addEventListener('submit', function(e) {
	e.preventDefault();

	var inputValue = form.userChoice.value;
	var usersNumber = parseInt(inputValue);
	var hint = document.getElementsByTagName('div')[1];
	var p = document.createElement('p');
	p.setAttribute('id', 'info');

	var info = document.getElementById('info');

	if (info) {
		hint.removeChild(info);
	}

	if (usersNumber > 0 && usersNumber < 101) {
		if (usersNumber > randomNumber) {
			hint.appendChild(p);
			p.innerHTML = "Twój wybór: " + usersNumber + "<br />Liczba, tórą musisz odgadnąć, jest mniejsza."
			form.userChoice.value = null;
		}
		else if (usersNumber < randomNumber) {
			hint.appendChild(p);
			p.innerHTML = "Twój wybór: " + usersNumber + "<br />Liczba, którą musisz odgadnąć, jest większa."
			form.userChoice.value = null;
		}
		else {
			hint.appendChild(p);
			p.innerHTML = "Gratulacje! Udało Ci się zgadnąć liczbę!"
			p.classList.add('big');
			form.classList.add('invisible');
			
			var playAgain = document.createElement('button');
			hint.appendChild(playAgain);
			playAgain.setAttribute('id', 'again');
			playAgain.innerHTML = 'Zagraj ponownie';
			playAgain = document.getElementById('again');

			playAgain.addEventListener('click', function() {
				location.reload();
			});
		}
	}
	else {
		alert("Podaj liczbę mieszczącą się w przedziale od 1 do 100.")
		form.userChoice.value = null;
	}

});



button.addEventListener('click', function() {
	guessCounter++;
	counter.innerHTML = guessCounter.toString();
})


