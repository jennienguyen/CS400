//using function
function abcOrdering(string) {
    return string.replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g,'').split('').sort().join('');
}
console.log(`${abcOrdering("supercalifragilisticexpialidocious")}`);

//using const
const abcOrdering2 = function (string) {
    return string.replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g,'').split('').sort().join('');
}
console.log(`${abcOrdering2("supercalifragilisticexpialidocious")}`);

//using =>
const abcOrdering3 = string => string.replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g,'').split('').sort().join('');
console.log(`${abcOrdering3("supercalifragilisticexpialidocious")}`);



