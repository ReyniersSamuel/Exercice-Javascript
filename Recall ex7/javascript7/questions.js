var selectElementsStartingWithA = function(array) {
    return array.filter(word => word[0] == 'a');
}

var selectElementsStartingWithVowel = function(array) {
    return array.filter(word => word[0] == 'a' || word[0] == 'e' || word[0] == 'i' || word[0] == 'o' || word[0] == 'u');
}

var removeNullElements = function(array) {
    return array.filter(word => word != null);
}

var removeNullAndFalseElements = function(array) {
    return array.filter(word => word != null && word !== false);
}

var reverseWordsInArray = function(array) {
    return array.map(word => word.split("").reverse().join(""));
}

var everyPossiblePair = function(array) {
    let nouveau = [];
    for (let i=0; i<array.length-1; i++) {
        for (let j=i+1; j<array.length; j++) {
            nouveau.push([array[i], array[j]]);
        }
    }
    nouveau.map(item => item.sort())
    return nouveau.sort();
}
var allElementsExceptFirstThree = function(array) {
    return array.splice(3, array.length);
}

var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return array;
}

var sortByLastLetter = function(array) {
    //return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
    return array.map(word => word.split("").reverse()).sort().map(word => word.reverse().join(""))
}

var getFirstHalf = function(string) {
    return string.slice(0, Math.ceil(string.length/2));
}

var makeNegative = function(number) {
    return -Math.abs(number);
}

var numberOfPalindromes = function(array) {
    return array.filter(word => word == word.split('').reverse().join('')).length;
    /* solution 2
    let p = 0;
    let comptage = 0;
    array.forEach(function(element) {
        comptage = 0;
        for (let i = 0; i<Math.floor(element.length/2); i++) {
            if (element[i] == element[element.length-1-i]) {
                comptage ++;
            }
        }
        if (comptage == Math.floor(element.length/2)) {
            p++;
        }
    })
    return p;
    }
    */
}

var shortestWord = function(array) {
    return array.reduce((a, b) => b.length < a.length ? b : a);
    /* solution 2
    let p = array[0];
    for (let i=0; i<array.length;i++) {
        if (array[i].length < p.length) {
            p = array[i];
        }
    }
    return p;
    */
    
}

var longestWord = function(array) {
    return array.reduce((a, b) => b.length > a.length ? b : a);
}

var sumNumbers = function(array) {
    return array.reduce((a, b) => a + b);
}

var repeatElements = function(array) {
    return array.concat(array);
}

var stringToNumber = function(string) {
    return Number(string);
}

var calculateAverage = function(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
    return array.splice(0, array.findIndex((element) => element > 5));
    /*let arrayNew = [];
    let i = 0;
    while (i < array.length) {
        if (array[i] > 5) {
            break;
        }
        arrayNew.push(array[i]);
        i++;
    }
    return arrayNew;
    */
}

var convertArrayToObject = function(array) {
    let nouveau = {};
    for (let i=0, j=1; i<array.length, j<array.length+1; i += 2, j += 2) {
        nouveau[array[i]] = array[j];
    }
    return nouveau;
}

var getAllLetters = function(array) {
    array = array.join("").match(/[A-Za-z]/g).sort();
    return Array.from(new Set(array));
}

var swapKeysAndValues = function(object) {
    return Object.keys(object).reduce((acc, key) => {
        acc[object[key]] = key;
        return acc;
    }, {});
}

var sumKeysAndValues = function(object) {
    return Object.keys(object).reduce((a, b) => Number(a) + Number(b))+ Object.values(object).reduce((a, b) => a + b);
}

var removeCapitals = function(string) {
    return string.replace(/[A-Z]/g, "");
}

var roundUp = function(number) {
    return Math.ceil(number);
}

var formatDateNicely = function(date) {
    let dateFinal = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    let monthFinal = date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth()+1}`; 
    return dateFinal + '/' + monthFinal + '/' + date.getFullYear();
}

var getDomainName = function(string) {
    string = string.split("@").pop();
    return string.substr(0, string.lastIndexOf(".")
    );
}

var titleize = function(string) {
    string = string.replace(/^\S|\s\S/g, function(texte) { return texte.toUpperCase() });
    string = string.replace(/\sThe\s/g, function(texte) { return texte.toLowerCase() });
    string = string.replace(/\w\sAnd\s/g, function(texte) { return texte.toLowerCase() });
    return string;
}

var checkForSpecialCharacters = function(string) {
    return /[\W]/.test(string);
}

var squareRoot = function(number) {
    return Math.sqrt(number);
}

var factorial = function(number) {
    let resultat = 1;
    for (i = 2; i<number+1; i++) {
        resultat *= i;
    }
    return resultat;
}

var findAnagrams = function(string) {
    string = string.split("");
    var res = [[]];
    // à comprendre
    for (var i=0; i<string.length; i++){
      while(res[res.length-1].length == i){
        var l = res.pop();
        for (var j=0; j<=l.length; j++){
          var copy = l.slice();
          copy.splice(j,0,string[i]);
          res.unshift(copy);
        }
      }
    }
    return res.map(word => word.join(""));
  }

var convertToCelsius = function(number) {
    return Math.round((number - 32) * 5 / 9);
}

var letterPosition = function(array) {
    return array.map(word => word.toLowerCase().charCodeAt(word) - 96);
}