document.addEventListener('DOMContantLoaded', () => {
	const heading = 'Please Meet Our Team!';
	let i = 0;
	console.log(heading.length);
	 
	function typing () { 
		if(i < heading.lenght) {
			document.querySelector('.heading').innerHTML += heading.charAt(i);
			i++;

		}
	}
	typing();
})