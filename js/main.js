// main.js
document.addEventListener('DOMContentLoaded', function() {
  // Dark mode toggle
  const darkModeToggle = document.querySelector('.dark-toggle');
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });

  // Check for saved dark mode preference
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }

  const projects = [
    {
      name: "Portfolio Website",
      description: "A responsive and animated personal portfolio built using HTML, CSS, and JavaScript with modern design principles.",
      link: "https://github.com/ramzirno/Portfolio",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      name: "UI Animation Library",
      description: "A collection of modern animations and transitions for web applications, optimized for performance.",
      link: "https://github.com/ramzirno/State-Events",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["JavaScript", "CSS Animations", "GSAP"]
    },
    {
      name: "Creative Blog Design",
      description: "A fully responsive blog layout with dark/light mode toggle and interactive UI elements.",
      link: "#",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["Web Design", "Dark Mode", "Responsive"]
    }
  ];

  // Render projects
  const projectList = document.getElementById('project-list');
  
  projects.forEach((project) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${project.image}" alt="${project.name}" loading="lazy">
      <div class="project-content">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
        </div>
        <a href="${project.link}" class="btn-secondary">View Project</a>
      </div>
    `;
    projectList.appendChild(card);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll reveal animation
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('section, .project-card');
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight / 5 * 4;

    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      
      if (elementPosition < triggerPoint) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial styles for animation
  document.querySelectorAll('section, .project-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  // Run once on load
  animateOnScroll();

  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
});