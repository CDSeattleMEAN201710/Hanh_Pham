module.exports = function (){
    return {
      add: function(num1, num2) { 
           console.log("The sum is:", num1 + num2);
      },
      multiply: function(num1, num2) {
          console.log("The multiply", num1 * num2)
      },
      square: function(num) {
           console.log("The square is:", num * num)
      },
      random: function(num1, num2) {
        var ran = Math.floor(Math.random()* num2) + num1
        console.log("The random number is:", ran);
      }
    }
  };