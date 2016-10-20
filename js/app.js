'use strict';

var activeDisplayStringState = '';
var lastActionWasEqual = false;

function swapSymbols (inputString) {
  var returnString = '';

  for (var i = 0; i < inputString.length; i++){
    if (inputString[i] === 'x') {
      returnString += '*';
    } else if (inputString[i] === '÷') {
      returnString += '/';
    } else {
      returnString += inputString[i];
    }
  }
  return returnString;
}

function callEqual (mathString) {

  if (mathString.length !== 0) {

    if ((mathString[mathString.length - 1] === "+") || (mathString[mathString.length - 1] === "-") || (mathString[mathString.length - 1] === "x") || (mathString[mathString.length - 1] === "÷")) {
      return 'ERROR ERROR';
    }
    var resultString = eval(swapSymbols(activeDisplayStringState));



    if (resultString === undefined) {
      return 'ERROR ERROR';
    } else {
      return resultString;
    }


  }

}

function displayCalcString (displayString) {


  $('#screen').text(displayString);
}


$( window ).ready(function() {
    console.log( "ready!" );

    $('.buttons').on('click', function(event) {
      var $target = $(event.target);
      var $classOp = $target.attr('class');

      if ($target.attr('class') !== 'buttons') {

        if ($classOp === "operator") {
          // call functions for operator calls
          if ($target.attr('id') === "clear") {
            // We need to call the clear function here
            displayCalcString('');
            activeDisplayStringState = '';
            console.log("clear");
          } else if ($target.attr('id') === "equals") {
            // We need to call the equals function here
            lastActionWasEqual = true;
            activeDisplayStringState = callEqual(activeDisplayStringState);
            displayCalcString(activeDisplayStringState);
            console.log("equals");
          } else {
            // all the rest of the operators are dealt with here
            activeDisplayStringState += ($target.text());
            displayCalcString(activeDisplayStringState);
            // switch ($target.text()) {
            //   case ('÷'):
            //     //Division! Baby.
            //     console.log('÷');
            //     break;
            //   case ('x'):
            //     //Multiplication! Baby.
            //     console.log('x');
            //     break;
            //   case ('-'):
            //     //Subtraction! Baby.
            //     console.log('-');
            //     break;
            //   case ('+'):
            //     //Addition! Baby.
            //     console.log('+');
            //     break;
            //   default:
            //     //Error state
            //     console.log('Unchecked state');
            //
            // }
          }

        } else {
          // number button handling
          console.log("numbers!!!!");
          if ($target.attr("id") === 'zero') {
            // zero
            if (lastActionWasEqual) {
              activeDisplayStringState = '';
              lastActionWasEqual = false;
            }
            activeDisplayStringState += '0';
            displayCalcString(activeDisplayStringState);
            console.log('0');

          } else {
            if (lastActionWasEqual) {
              activeDisplayStringState = '';
              lastActionWasEqual = false;
            }
            activeDisplayStringState += ($target.text());
            displayCalcString(activeDisplayStringState);
            // switch ($target.text()) {
            //   case ('1'):
            //     // 1, baby!
            //     console.log('1');
            //     break;
            //   case ('2'):
            //     // 2, baby!
            //     console.log('2');
            //     break;
            //   case ('3'):
            //     // 3, baby!
            //     console.log('3');
            //     break;
            //   case ('4'):
            //     //4, baby!
            //     console.log('4');
            //     break;
            //   case ('5'):
            //     // 5, baby!
            //     console.log('5');
            //     break;
            //   case ('6'):
            //     // 6, baby!
            //     console.log('6');
            //     break;
            //   case ('7'):
            //     // 7, baby!
            //     console.log('7');
            //     break;
            //   case ('8'):
            //     // 8, baby!
            //     console.log('8');
            //     break;
            //   case ('9'):
            //     // 9, baby!
            //     console.log('9');
            //     break;
            //   default:
            //     // Unhandled condition!
            //     console.log('Error! Unhandled condition');
            // }
          }

        }
      }


});

  });
