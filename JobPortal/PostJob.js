const jobForm = document.getElementById("jobForm");
const jobListings = document.getElementById("jobListings");
jobForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const jobTitle = document.getElementById("jobTitle").value.trim();
    const companyName = document.getElementById("companyName").value.trim();
    const location = document.getElementById("jobLocation").value.trim();
    const salary = document.getElementById("salary").value.trim();
    const jobDescription = document.getElementById("jobDescription").value.trim();
    if (jobTitle === "" || companyName === "") {
        alert("Job Title and Company Name are required!");
        return;
    }
    const jobCard = document.createElement("div");
    jobCard.classList.add("job-card");
    jobCard.innerHTML = `
        <h3>${jobTitle}</h3>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Location:</strong> ${location}</p>
        ${salary ? `<p><strong>Salary:</strong> ${salary}</p>` : ""}
        <p>${jobDescription}</p>
        <button class="delete-btn">Delete Job</button>
    `;
    jobListings.appendChild(jobCard);
    const deleteBtn = jobCard.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function() {
        jobCard.remove();
    });
    jobForm.reset();
});
