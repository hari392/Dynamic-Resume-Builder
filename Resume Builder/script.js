function generateResume() {
    // Get form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const profileSummary = document.getElementById('profileSummary').value;
    const skills = document.getElementById('skills').value.split(',');
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const projects = document.getElementById('projects').value.split('\n');
    const hobbies = document.getElementById('hobbies').value.split(',');

    // Generate resume content
    const resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${profileSummary ? `<h4>Profile Summary</h4><p>${profileSummary}</p>` : ''}
        <h4>Skills</h4>
        <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Projects</h4>
        <ul>${projects.map(project => `<li>${project.trim()}</li>`).join('')}</ul>
        ${hobbies.length > 0 ? `<h4>Hobbies</h4><ul>${hobbies.map(hobby => `<li>${hobby.trim()}</li>`).join('')}</ul>` : ''}
    `;
}

function printResume() {
    const printContent = document.getElementById('resumeOutput').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
}
