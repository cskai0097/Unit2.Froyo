const flavorList = prompt("Enter a list of comma-separated froyo flavors");
//split the string into an array of individual flavors
const flavors = flavorList.split(",")
//initialized an object to count the number of occurrences of each flavor
const flavorCount = {};
//loop through the flavots array and count the occurences of each flavor
for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i].trim();//Remove any extra spaces
    if(flavor in flavorCount){
        flavorCount[flavor]++;
    } else{
        flavorCount[flavor] = 1;
    }
}
//print the results to the console in a table
console.table(flavorCount);