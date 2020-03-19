const TENS = [
    'ten', 'twenty', 'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety'
  ];
const ONE__NINETEEN = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 
    'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
    'seventeen', 'eighteen', 'nineteen'
];

module.exports = function toReadable (number) {
    let hundreds, ones, tens, res = [];
    if(number < 20){
        return ONE__NINETEEN[number];
    }
  
    if(number < 100){
        ones = number % 10;
        tens = Math.floor(number / 10);
  
        res.push(TENS[tens-1]);
        res.push(toReadable(ones));

        return res.filter(function(value){
              return value != "zero";
        }).join(" ");
    }
  
    hundreds = Math.floor(number / 100);
    res.push(toReadable(hundreds));
    res.push("hundred");
    res.push(toReadable(number % 100));
  
    return res.filter(function(value){
      return  value != "zero";
    }).join(" ");
  }
