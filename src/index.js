module.exports = function reverse(n) {
 n = n.toString();
  let newN = Math.abs(n).toString();
  let number = '';
      for (let i = newN.length - 1; i >= 0; i--) {
        number += newN[i];
      }
  if (n[0] == '-') {
    number = `+${number}`
  } else if (n[0] == '+') {
    number = `-${number}`
  } else {
    number = number;
  }
return (number)
  }
