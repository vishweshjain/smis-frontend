// const studentDetails = {
//     name: 'Vishwesh Jain',
//     division: 'A',
//     course: 'Computer Science'

// };

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('student-name').textContent = studentDetails.name;
//     document.getElementById('student-division').textContent = studentDetails.division;
//     document.getElementById('student-course').textContent = studentDetails.course;
// });
let body = document.body;
let profile = document.querySelector('.header .flex .profile');


document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
    seacrhForm.classList.remove('active');
}

let seacrhForm = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () => {
    seacrhForm.classList.toggle('active');
    profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () => {
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}

document.querySelector('.side-bar .close-side-bar').onclick = () => {
    sideBar.classList.remove('active');
    body.classList.remove('active');
}

window.onscroll = () => {
    profile.classList.remove('active');
    seacrhForm.classList.remove('active');

    if(window.innerWidth < 1200){
        sideBar.classList.toggle('active');
        body.classList.toggle('active');
    }
}

let toggleBtn = document.querySelector('#toggle-btn');
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = ()=> {
    toggleBtn.classList.replace('fa-sun' , 'fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode' , 'enabled');
}

const disableDarkMode = ()=> {
    toggleBtn.classList.replace('fa-moon' , 'fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode' , 'disabled');
}

if(darkMode === 'enabled'){

    enableDarkMode();
}
toggleBtn.onclick = (e) => {
    let darkMode = localStorage.getItem('dark-mode');
    if(darkMode === 'disabled'){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
}

//attendance setion

const daysGrid = document.getElementById('days-grid');
const monthYearDisplay = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let currentDate = new Date();

function renderCalendar(date) {
    const month = date.getMonth();
    const year = date.getFullYear();

    monthYearDisplay.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

    // Get first day of the month
    const firstDay = new Date(year, month, 1).getDay();
    // Get the number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    daysGrid.innerHTML = '';

    // Fill the days grid
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        daysGrid.appendChild(emptyDiv);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;

        // Example: Mark some days as present or absent
        if (Math.random() > 0.5) {
            dayDiv.classList.add('present');
        } else {
            dayDiv.classList.add('absent');
        }

        daysGrid.appendChild(dayDiv);
    }
}

prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});
// Initial render
renderCalendar(currentDate);

// result section
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Script loaded");
    const resultForm = document.getElementById('result-form');
    const resultDisplay = document.getElementById('result-display');
    const semesterNumberDisplay = document.getElementById('semester-number');
    const resultContent = document.getElementById('result-content');
    
    if (resultForm) {
        resultForm.onsubmit = function(event) {
            event.preventDefault(); // Prevent the default form submission

            let semesterInput = document.getElementById('semester').value;
            // For demo purposes, we'll generate a mock result
            semesterNumberDisplay.textContent = semesterInput;
            resultContent.innerHTML = `
                <p><strong>Course 1:</strong> A+</p>
                <p><strong>Course 2:</strong> B</p>
                <p><strong>Course 3:</strong> A</p>
                <p><strong>Course 4:</strong> C+</p>
                <p><strong>Total Credits:</strong> 20</p>
                <p><strong>GPA:</strong> 3.5</p>
            `;

            resultDisplay.classList.remove('hidden');
        };
    } else {
        console.error("Form element not found");
    }
});


// Fees section
document.addEventListener('DOMContentLoaded', () => {
    console.log("Fees page script loaded");
    // Get elements for dynamic updates (if needed)
    const totalFeesElement = document.getElementById('total-fees');
    const feesPaidElement = document.getElementById('fees-paid');
    const feesToPayElement = document.getElementById('fees-to-pay');
    // Example values
    const totalFees = 5000;
    const feesPaid = 2000;
    // Calculate fees to pay
    const feesToPay = totalFees - feesPaid;
    // Update the fees elements
    if (totalFeesElement && feesPaidElement && feesToPayElement) {
        totalFeesElement.textContent = `$${totalFees}`;
        feesPaidElement.textContent = `$${feesPaid}`;
        feesToPayElement.textContent = `$${feesToPay}`;
    }
    // Payment button click handler
    const payButton = document.getElementById('pay-button');
    if (payButton) {
        payButton.onclick = () => {
            alert('Redirecting to payment gateway...');
            // Add your payment processing logic here
        };
    } else {
        console.error("Payment button not found");
    }
});


// Courses section
document.getElementById('timetable-btn').onclick = () => {
    document.getElementById('timetable-section').style.display = 'block';
    document.getElementById('study-materials-section').style.display = 'none';
};

document.getElementById('study-materials-btn').onclick = () => {
    document.getElementById('timetable-section').style.display = 'none';
    document.getElementById('study-materials-section').style.display = 'block';
};


// // result section


// document.addEventListener('DOMContentLoaded', () => {
//     alert("Js is working");
//     console.log("DOM fully loaded and parsed");

//     // Result page logic
//     const resultForm = document.getElementById('result-form');
//     const resultTableContainer = document.getElementById('result-table-container');
//     const resultTableBody = document.getElementById('result-table').getElementsByTagName('tbody')[0];

//     // Log elements to debug if they're correctly fetched
//     console.log(resultForm); // Should not be null
//     console.log(resultTableContainer); // Should not be null
//     console.log(resultTableBody); // Should not be null

//     if (!resultForm || !resultTableContainer || !resultTableBody) {
//         console.error("Required elements are not found in the DOM");
//         return;
//     }

//     resultForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         console.log("Form submitted");

//         // Clear previous results
//         resultTableBody.innerHTML = '';
//         console.log("Cleared previous results");

//         // Get form data
//         const semester = document.getElementById('semester').value;
//         console.log("Selected semester:", semester);

//         // Example result data based on form input
//         const results = getResults(semester);
//         console.log("Fetched results:", results);

//         // Populate results table
//         results.forEach(result => {
//             const row = resultTableBody.insertRow();
//             row.insertCell().textContent = result.subject;
//             row.insertCell().textContent = result.marksObtained;
//             row.insertCell().textContent = result.totalMarks;
//             row.insertCell().textContent = result.grade;
//         });

//         resultTableContainer.classList.remove('hidden');
//         console.log("Results displayed");
//     });

//     function getResults(semester) {
//         console.log("getResults function called with semester:", semester);
//         // Replace with actual logic to fetch results based on the semester
//         // For now, returning dummy data
//         return [
//             { subject: 'Mathematics', marksObtained: 85, totalMarks: 100, grade: 'A' },
//             { subject: 'Physics', marksObtained: 78, totalMarks: 100, grade: 'B' },
//             { subject: 'Chemistry', marksObtained: 88, totalMarks: 100, grade: 'A' }
//         ];
//     }

//     // Other existing JavaScript code (if any)
// });

