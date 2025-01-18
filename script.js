// Function to show the selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => section.classList.remove('active'));

    const section = document.getElementById(sectionId);
    section.classList.add('active');
}

// Toggle between dark and light mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const themeButton = document.getElementById('theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = 'Switch to Light Mode';
    } else {
        themeButton.textContent = 'Switch to Dark Mode';
    }
}

// Function to start consultation
function startConsultation() {
    alert("Starting your consultation now!");
}

// Handle appointment form submission
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!doctor || !date || !time) {
        alert("Please fill in all the fields!");
        return;
    }

    alert(`Appointment Confirmed!\nDoctor: ${doctor}\nDate: ${date}\nTime: ${time}`);
});

// Handle doctor registration form submission
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('doc-name').value;
    const specialty = document.getElementById('specialty').value;
    const sessions = document.getElementById('sessions').value;
    const fees = document.getElementById('fees').value;

    if (!name || !specialty || !sessions || !fees) {
        alert("Please fill in all the fields!");
        return;
    }

    alert("Doctor registered successfully!");
    document.getElementById('registration-form').reset();
});
