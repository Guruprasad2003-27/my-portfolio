<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gurupasad K.S - Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{% static 'portfolio/css/style.css' %}">
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Gurupasad K.S</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero bg-primary text-white text-center py-5">
        <div class="container">
            <h1 class="display-4">Hello, I'm Gurupasad K.S</h1>
            <p class="lead">Aspiring Software Developer | Python Enthusiast</p>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-5">
        <div class="container">
            <h2>About Me</h2>
            <p>To obtain a creative and challenging position in an organization that gives me an opportunity for self-improvement and leadership, while contributing to the symbolic growth of the organization with my technical, innovative, and logical skills.</p>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="bg-light py-5">
        <div class="container">
            <h2>Skills</h2>
            <ul class="list-inline">
                <li class="list-inline-item badge bg-secondary m-1">Python</li>
                <li class="list-inline-item badge bg-secondary m-1">Java (Basics)</li>
                <li class="list-inline-item badge bg-secondary m-1">HTML</li>
            </ul>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-5">
        <div class="container">
            <h2>Projects & Achievements</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="{% static 'portfolio/images/project1.jpg' %}" class="card-img-top" alt="Project Image">
                        <div class="card-body">
                            <h5 class="card-title">Ideathon 2024</h5>
                            <p class="card-text">1st Prize in Ideathon 2024 for innovative project development.</p>
                        </div>
                    </div>
                </div>
                <!-- Add more project cards here -->
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-light py-5">
        <div class="container">
            <h2>Contact Me</h2>
            <p>Email: <a href="mailto:guruprasadks2003@gmail.com">guruprasadks2003@gmail.com</a></p>
            <p>Phone: +91 7530021461</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/guruprasad2003" target="_blank">linkedin.com/in/guruprasad2003</a></p>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
        <div class="container">
            <p>&copy; 2025 Gurupasad K.S. All rights reserved.</p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{% static 'portfolio/js/script.js' %}"></script>
</body>
</html>
