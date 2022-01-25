// const popup1 = document.querySelector('.hidden');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const btnSubmit = document.querySelector('.btn_submit');
const btnStart = document.querySelector('.start');
const btnPress = document.querySelector('.press');
const h1 = document.querySelector('.h1');
const winner = document.querySelector('.win');
const btnNewGame = document.querySelector('.newgame');
const amountinp = document.querySelector('#inp');
const incbalance = document.querySelector('.incbalance');
const balance2 = document.querySelector('.incbalance2');
const startgame = document.querySelector('.input2');
const loser = document.querySelector('.box5');
const btntry = document.querySelector('.try');
const username = document.querySelector('.name');
const username1 = document.querySelector('.username1');
const nav = document.querySelector('.nav');

/////////////////////////////////////   submit button    ///////////////////////////////////////////////////////////////////////////////
btnSubmit.addEventListener('click', () => {
	box1.classList.add('hidden'),
		box2.classList.remove('hidden'),
		nav.classList.remove('hidden');
	incbalance.innerHTML = amountinp.value;
	username.innerHTML = ': ' + username1.value;
	if ((incbalance.innerHTML = amountinp.value)) {
		incbalance.innerHTML = 'Your balance is: ' + incbalance.innerHTML + ' $';
		console.log(incbalance);
	} else {
		incbalance.innerHTML = 'Your balance is: 0 $';
	}
});

/////////////////////////////////////   start button    ///////////////////////////////////////////////////////////////////////////////
btnStart.addEventListener('click', () => {
	balance2.innerHTML =
		'Your balance is: ' + (amountinp.value - startgame.value) + ' $';
});

btnStart.addEventListener('click', () => {
	box2.classList.add('hidden'),
		box3.classList.remove('hidden'),
		nav.classList.add('hidden');
});
/////////////////////////////////////   random number    ///////////////////////////////////////////////////////////////////////////////
const win = Number('10' + startgame.value);

btnPress.addEventListener('click', () => {
	h1.innerHTML = Math.floor(Math.random() * 10);
	if (h1.innerHTML == 5) {
		winner.classList.remove('hidden'),
			/////////////////////////////////////  winners  balance   ////////////////////////////////////////////////////////////////////////
			(balance2.innerHTML =
				'Your balance is: ' + (amountinp.value - startgame.value + win) + ' $');
	}
	if (h1.innerHTML == 9) {
		loser.classList.remove('hidden'),
			box3.classList.add('hidden'),
			/////////////////////////////////////  losers  balance   ////////////////////////////////////////////////////////////////////////
			(balance2.innerHTML =
				'Your balance is: ' + (amountinp.value - startgame.value) + ' $');
	}
});

/////////////////////////////////////////////////    winner    ///////////////////////////////////////////////////////////////////////////////
btnNewGame.addEventListener('click', () => {
	winner.classList.add('hidden');
});

/////////////////////////////////////   loser   ///////////////////////////////////////////////////////////////////////////////
btntry.addEventListener('click', () => {
	loser.classList.add('hidden'), box3.classList.remove('hidden');
});
