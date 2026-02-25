const jobForm = document.getElementById("jobForm");
const jobListings = document.getElementById("jobListings");
const searchInput = document.getElementById("searchJobs");
let editMode = false;
let currentEditCard = null;
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
    if (editMode) {
        currentEditCard.querySelector("h3").textContent = jobTitle;
        currentEditCard.querySelector(".company").textContent = companyName;
        currentEditCard.querySelector(".location").textContent = location;
        currentEditCard.querySelector(".salary").textContent = salary;
        currentEditCard.querySelector(".description").textContent = jobDescription;
        editMode = false;
        currentEditCard = null;
        jobForm.querySelector("button").textContent = "Add Job";
    } else {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
        jobCard.innerHTML = `
            <h3>${jobTitle}</h3>
            <p><strong>Company:</strong> <span class="company">${companyName}</span></p>
            <p><strong>Location:</strong> <span class="location">${location}</span></p>
            <p><strong>Salary:</strong> <span class="salary">${salary}</span></p>
            <p class="description">${jobDescription}</p>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        jobListings.appendChild(jobCard);
        jobCard.querySelector(".delete-btn").addEventListener("click", function() {
            jobCard.remove();
        });
        jobCard.querySelector(".edit-btn").addEventListener("click", function() {
            document.getElementById("jobTitle").value = jobTitle;
            document.getElementById("companyName").value = companyName;
            document.getElementById("jobLocation").value = location;
            document.getElementById("salary").value = salary;
            document.getElementById("jobDescription").value = jobDescription;
            editMode = true;
            currentEditCard = jobCard;
            jobForm.querySelector("button").textContent = "Update Job";
        });
    }
    jobForm.reset();
});
searchInput.addEventListener("keyup", function() {
    const searchValue = searchInput.value.toLowerCase();
    const jobCards = document.querySelectorAll(".job-card");
    jobCards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const company = card.querySelector(".company").textContent.toLowerCase();
        if (title.includes(searchValue) || company.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
