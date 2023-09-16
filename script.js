let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer', salary: 1000 },
    { id: 2, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
    { id: 3, name: 'karen', age: 19, profession: 'admin', salary: 900 },
];
const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
];

// 1. Print all developers from the array whose salary is above the average salary of the array.
function PrintHighEarningDevelopers() {
    arr.forEach(({ name, salary }) => {
        if (salary >= 1000) {
            console.log(name);
        }
    });
    //Write your code here , just console.log

}
// 1. Print Developers
function printDeveloper() {
    function arr() {
        console.log("id,name,age,profession,salary");
    }
}

// 2. Using a recursive function, add a new data object to the array until the user says 'no' via a prompt.
function recursiveAddData() {
    //Write your code here, just console.log
   
  
    }
// 2. Add Data
function addData(arr) {

    arr.push = (4,  "pooja", 18,  "admin",  900 );
    console.log(arr);
}

// 3. Remove the youngest and oldest person from the array.
function removeYoungestAndOldest() {
    //Write your code here, just console.log
}
// 3. Remove Admins
function removeAdmin() {
    delete arr.profession == "Admin";
    console.log(arr);
}

// 4. Merge two arrays (use a dummy array for demonstration) such that the resulting array has no duplicate professions.
function mergeAndFilterProfessions() {
    //Write your code here, just console.log
}
// 4. Concatenate Array
function concatenateArray() {

 }

// 5. Find the person with the highest salary and reduce their salary by 10% as tax.
function applyTax() {
    //Write your code here, just console.log
}
// 5. Average Age

let findAverageAge = (array = []) => {
    let { sum, count } = array.reduce((acc, val) => {
        let { sum, count } = acc;
        sum += val.age;
        count++;
        return { sum, count };
    }, {
        sum: 0, count: 0
    });
    return (sum / (count || 1));
};
console.log(findAverageAge(arr));



// 6. Check if every person in the array is a developer.
function isEveryoneDeveloper(arr) {
    if (arr[i].profession == arr[i + 1].profession) {
        return true;
    }
    //Write your code here, just console.log
}
// 6. Age Check
function checkAgeAbove25(arr) {
    if (arr.age > 25) {
        return true;
    }
}

// 7. Swap the professions of the first and last person in the array.
function swapProfessions() {
    //Write your code here, just console.log
}
// 7. Unique Professions
function uniqueProfessions() {

}

// 8. Using the `map` method, add a new property to each person called 'experience' with a default value of 1 year.
function addExperienceProperty() {
    //Write your code here, just console.log
}
// 8. Sort by Age
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

// 9. Group persons by profession and count them. E.g., {developer: 2, admin: 1}.
function groupByProfession() {
    //Write your code here, just console.log
}
// 9. Update Profession
function updateJohnsProfession() {

    arr.profession = "Admin";
    console.log(arr);
}

// 10. Find the person who has a name with the longest length and capitalize their profession.
function capitalizeLongestNamedPersonProfession() {
    //Write your code here, just console.log
}

// 11. Create a function that shuffles the array in a random order.
function shuffleArray(arr) {
    for (let i = array.length - 1; i > 0; i--) {


        let j = Math.floor(Math.random() * (i + 1));

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return array;

    //Write your code here, just console.log
}

// 12. Create a function that rotates the array to the right by n steps, where n is provided as an argument.
function rotateArray(n) {
    //Write your code here, just console.log
}

// 13. Create a function that finds the person with the closest age to a given number.
function findClosestAge(age) {
    //Write your code here, just console.log
}

// 14. Create a function that checks if there's any repeated name in the array.
function hasRepeatedNames(arr) {

    let map = {};
    let result = false;
    for (let i = 0; i < arr.length; i++) {

        if (map[arr[i]]) {
            result = true;

            break;
        }

        map[arr[i]] = true;
    }
    if (result) {
        console.log('Array contains duplicate elements');
    } else {
        console.log('Array does not contain duplicate elements');
    }
}


//Write your code here, just console.log

// 10. Profession Count
function getTotalProfessions() {

    let collect = require('collect.js');

    let data = collect(arr);
    let total = data.count();

    console.log('Total number of elements are:', { total });

}