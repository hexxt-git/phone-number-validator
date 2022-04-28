function rdm(max){
    return Math.floor(Math.random()*(max +1));
};
function random( min, max, floor){
    if (floor) return Math.floor((Math.random()*(max - min + 1)) + min);
    return (Math.random()*(max - min)) + min;
};
function write(input){
    console.log('%c' + input, 'color: #AEF');
    return void 0;
};
function error(input){
    console.log('%c' + input, 'color: #F54;');
    return void 0;
};

function telephoneCheck(str) {
    if(
		/^[0-9]{10}$/.test(str)|// 							  		1234567890
		/^[0-9]+ [0-9]{10}$/.test(str)|//	 				  		69 1234567890
    	/^[0-9]{3} [0-9]{3} [0-9]{4}$/.test(str)|//           		123 456 7890
    	/^[0-9]+ [0-9]{3} [0-9]{3} [0-9]{4}$/.test(str)|//    		69 123 456 7890
		/^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/.test(str)| //		  		123-456-7890
		/^[0-9]+ [0-9]{3}\-[0-9]{3}\-[0-9]{4}$/.test(str)|//	  	69 123-456-7890
      	/^\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/.test(str)|//    			(123)456-7890
      	/^[0-9]+\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/.test(str)|//	 	69 (123)456-7890
    	/^[0-9]+ \([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/.test(str)//	 	69(123)456-7890
    ){
      return true
    }
    return false
  }
  let phone = []
  let updatePhone = ()=>{
    document.getElementById('phone').innerText = phone.join('')
  }
for ( let i = 0 ; i <= 12 ; i++){
	document.getElementById(`n${i}`).addEventListener( 'click', ()=>{
    	phone.push(document.getElementById(`n${i}`).innerText)
    	updatePhone()
 	})
}
document.getElementById(`n13`).addEventListener( 'click', ()=>{
  	phone.push(' ')
  	updatePhone()
})
document.getElementById(`n14`).addEventListener( 'click', ()=>{
 	phone.pop()
 	updatePhone()
})
document.getElementById(`home`).addEventListener( 'click', ()=>{
  	phone = []
  	updatePhone()
})
document.getElementById('nC').addEventListener('click',()=>{
  	if(telephoneCheck(phone.join(''))){
		phone = []
		document.getElementById('phone').innerHTML = `
		<div class='green'>
			valid phone number
		</div>
		`
	}
  	else{
		phone = []
		document.getElementById('phone').innerHTML = `
		<div class='red'>
			invalid phone number
		</div>
		`
  }	
})

