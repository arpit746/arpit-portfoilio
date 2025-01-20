document.addEventListener('DOMContentLoaded', () => {
    // Array of projects
    const projects = [
      {
        title: "Project 1",
        description: "This is a description of Project 1.",
        image: "img/project1.jpg",
        link: "#"
      },
      {
        title: "Project 2",
        description: "This is a description of Project 2.",
        image: "img/project2.jpg",
        link: "#"
      },
      {
        title: "Project 3",
        description: "This is a description of Project 3.",
        image: "img/project3.jpg",
        link: "#"
      }
    ];
  
    // Get the projects list container
    const projectsList = document.getElementById('projects-list');
  
    // Populate projects
    projects.forEach(project => {
      const projectCard = `
        <div class="col-md-4">
          <div class="card">
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.description}</p>
              <a href="${project.link}" class="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
      `;
      projectsList.innerHTML += projectCard;
    });
  });
  

  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert('Please fill in all fields!');
      return;
    }
  
    alert(`Thank you, ${name}! Your message has been sent.`);
  });
  document.getElementById("downloadResumeBtn").addEventListener("click", function () {
    // Corrected path to the resume file
    const fileUrl = "/image/Arpit resume React js.pdf"; // Use forward slashes
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "Resume.pdf"; // Customize the name of the downloaded file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
  