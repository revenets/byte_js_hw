const createTooltip = (element, text) => {
	const tip = document.createElement('div');

	tip.classList.add('tooltip');
	tip.innerText = text;
	
	document.body.append(tip);
	
	const elemCoords = element.getBoundingClientRect();	

	tip.style.top = `${elemCoords.top - elemCoords.height - 5}px`;
	tip.style.left = `${elemCoords.left - (tip.offsetWidth / 2) + (elemCoords.width / 2)}px`;
	
} 

const button = document.getElementById('example');

createTooltip(button, 'example text bla bla bla');