let age = 32;
let userName = 'Andre';
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = {
    title: 'Developer', 
    place: 'New York', 
    salary: '5000'
};

// alert(String(hobbies[0])+" "+String(hobbies[1]));
// alert(job.title)

let totalAdultYears;

function calculateAdultYears(userAge) {
    return userAge - 18
}

totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);

