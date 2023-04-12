const timer = document.querySelector('span')

setInterval(() => {
	timer.innerText = new Date().toLocaleString()
}, 1000)

function call1(){
	call2();
	document.getElementById("btn1").innerText = "Clicked!"
}

function call2(){
	call3()
	document.getElementById("btn2").innerText = "Clicked!"

}

function call3(){
	call4()
	document.getElementById("btn3").innerText = "Clicked!"

}

function call4(){
	console.log('Done!')
	const chance = Math.random()
	if (chance>0.5){
		console.error("Luck ran out!")
	}
}