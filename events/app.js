function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(aRect.top + aRect.height < bRect.top || aRect.top > bRect.top + bRect.height || aRect.left + aRect.width < bRect.left || aRect.left > bRect.left + bRect.width	);
}

const playerAvatar = document.querySelector('#player')
const coinAvatar = document.querySelector('#coin')

window.addEventListener('keyup', function(e){
	if(e.key === 'ArrowDown' || e.key === 'Down'){
		const currTop = extractPos(playerAvatar.style.top);
		playerAvatar.style.top = `${currTop + 50}px`;
	}
	else if(e.key === 'ArrowUp' || e.key === 'Up'){
		const currTop = extractPos(playerAvatar.style.top);
		playerAvatar.style.top = `${currTop - 50}px`;
	}
	else if(e.key === 'ArrowRight' || e.key === 'Right'){
		const currLeft = extractPos(playerAvatar.style.left);
		playerAvatar.style.left = `${currLeft + 50}px`;
		playerAvatar.style.transform = 'scale(1,1)';
	}
	else if(e.key === 'ArrowLeft' || e.key === 'Left'){
		const currLeft = extractPos(playerAvatar.style.left);
		playerAvatar.style.left = `${currLeft - 50}px`;
		playerAvatar.style.transform = 'scale(-1,1)';
	}
	if(isTouching(playerAvatar,coinAvatar)) moveCoin();
});

const extractPos = (pos) => {
	if(!pos) return 100;
	return parseInt(pos.slice(0,-2));
}

const moveCoin = () => {
	const y = Math.floor(Math.random() * window.innerHeight);
	const x = Math.floor(Math.random() * window.innerWidth);
	coinAvatar.style.top = `${y}px`;
	coinAvatar.style.left = `${x}px`;
}