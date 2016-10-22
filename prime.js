var inputnumber = 1200;
var outputText = '';
var n = 2;
function isPrime(number) {
  if (number <= 1) {
    return false;
  } else if(number <=3) {
      return true;
  } else {
    var i = 2;
    while(i*i <= number){
      if(number % i == 0) {
        return false;
      }
      i++;
    }
    return true;
  }
}
while (n < inputnumber){
  if (isPrime(n)&&isPrime(n+2)){
    outputText += '('+n+','+(n+2)+')\n';
  }
  n++;
}


console.log(outputText);
