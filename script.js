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
      /^1? ?[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/.test(str)|
      /^1*\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/.test(str)|
      /^1 \([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/.test(str)|
      /^1 \([0-9]{3}\) [0-9]{3}\-[0-9]{4}$/.test(str)|
      /^1* *[0-9]{3} [0-9]{3} [0-9]{4}$/.test(str)|
      /^[0-9]{10}$/.test(str)
    ){
      return true
    }
      return false
  }
//write(telephoneCheck(prompt('phone')));