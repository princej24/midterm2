document.addEventListener("DOMContentLoaded", function() {
    var jobListings = [
        {
            title: "Frontend Developer",
            type: "Full-time",
            location: "New York, NY",
            postedDate: "2024-02-10"
        },
        {
            title: "Backend Developer",
            type: "Contract",
            location: "San Francisco, CA",
            postedDate: "2024-02-09"
        },
        {
            title: "UI/UX Designer",
            type: "Part-time",
            location: "Los Angeles, CA",
            postedDate: "2024-02-08"
        },
        {
            title: "Data Scientist",
            type: "Full-time",
            location: "Seattle, WA",
            postedDate: "2024-02-07"
        },
        {
            title: "Software Engineer",
            type: "Full-time",
            location: "Austin, TX",
            postedDate: "2024-02-06"
        },
        {
            title: "Product Manager",
            type: "Full-time",
            location: "Chicago, IL",
            postedDate: "2024-02-05"
        },
        {
            title: "DevOps Engineer",
            type: "Contract",
            location: "Boston, MA",
            postedDate: "2024-02-04"
        },
        {
            title: "Network Administrator",
            type: "Full-time",
            location: "Atlanta, GA",
            postedDate: "2024-02-03"
        },
        {
            title: "Mobile App Developer",
            type: "Full-time",
            location: "Denver, CO",
            postedDate: "2024-02-02"
        },
        {
            title: "Quality Assurance Analyst",
            type: "Full-time",
            location: "Portland, OR",
            postedDate: "2024-02-01"
        }
    ];

    function populateJobListings() {
        var jobListingsContainer = document.getElementById("job-listings");

        jobListingsContainer.innerHTML = "";

        jobListings.forEach(function(job) {
            var jobElement = document.createElement("div");
            jobElement.classList.add("job");
            jobElement.innerHTML = `
                <h2>${job.title}</h2>
                <p>Type: ${job.type}</p>
                <p>Location: ${job.location}</p>
                <p>Posted Date: ${job.postedDate}</p>
            `;
            jobListingsContainer.appendChild(jobElement);
        });
    }

    populateJobListings();

    function validateForm() {
        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
        var locationInput = document.getElementById("location");
        var termsCheckbox = document.getElementById("terms");

        if (nameInput.value.trim() === "" || !isValidEmail(emailInput.value) || locationInput.value.trim() === "" || !termsCheckbox.checked) {
            alert("Please fill out all fields correctly.");
            return false;
        }
        return true;
    }


    var subscriptionForm = document.getElementById("subscription-form");
    subscriptionForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        if (!validateForm()) {
            return;
        }
        subscribe();
    });

    function clearForm() {
        document.getElementById("subscription-form").reset();
    }

    var subscriptionForm = document.getElementById("subscription-form");
    subscriptionForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        subscribe(); 
    });
    

    function subscribe() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var location = document.getElementById("location").value;

        alert(`Thank you, ${name}! You have successfully subscribed to job alerts.\nEmail: ${email}\nLocation: ${location}`);
        clearForm();
    }

    function filterJobs() {
        var searchInput = document.getElementById("search-input").value.toLowerCase();
        var jobElements = document.querySelectorAll(".job");

        jobElements.forEach(function(jobElement) {
            var title = jobElement.querySelector("h2").textContent.toLowerCase();
            if (title.includes(searchInput)) {
                jobElement.style.display = "block"; 
            } else {
                jobElement.style.display = "none"; 
            }
        });
    }

    var searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", filterJobs);

});
