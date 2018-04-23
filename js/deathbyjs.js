/*eslint-env browser*/

//STEP 1
function alphabet_order(str) {
    "use strict";
    return str.split('').sort().join('');
}
window.console.log(alphabet_order("justina"));

//STEP 2
function firstLetterToUpperCase(job) {
    "use strict";
    var facts = job.split(" ");
    var newfacts = [];
    
    for (var x = 0; x < facts.length; x++) {
        newfacts.push(facts[x].charAt(0).toUpperCase() + facts[x].slice(1));
    }
    
    return newfacts.join(" ");
}

window.console.log(firstLetterToUpperCase("she liked to work early morning shifts."));

//STEP 3

function countVowels(words) {
    var vowels = "aeiouAEIOU";
    var v = 0;
    
    for (x = 0; x < words.length; x++) {
        if (vowels.indexOf(words[x]) !== -1) {
            v += 1;
        }
    }
    
    return v;
}

window.console.log(countVowels("She loves ice coffee."));

//STEP 4

//STEP 5
