console.log("This is working");

document.getElementById("dropdown").addEventListener("click", openMenu);



	function openMenu() {
		document.getElementById("dropdown-menu").classList.toggle("active");
		
	}