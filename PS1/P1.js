const abcOrdering3 = string => string.replace(/[&\/\\#,+()$~%.'":*?<>{}!]/g,'').split('').sort().join('');
console.log(`${abcOrdering3("supercalifragilis!ticexpialidocious")}`);
