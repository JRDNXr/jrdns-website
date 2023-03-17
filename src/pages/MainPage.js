import "./MainPage.css";

const MainPage = () => {
    return (
        <body class="main-content">
            <header class="container header active" id="home">
                <div class="header-content">
                    <div class="left-header">
                        <div class="h-shape"></div>
                        <div class="image">
                            <img src="../../assets/profilePic.jpg" alt="P"/>
                        </div>
                    </div>
                    <div class="right-header">
                        <h1 class="name">
                            Hi, I'm <span>Jordan D'Souza. </span>
                            A Computer Programmer.
                        </h1>
                        <p>
                            DESCRIPTION.
                        </p>
                    </div>
                </div>
            </header>
            <main>
                <section class="container about" id="about">
                    <div class="main-title">
                        <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
                    </div>
                    <div class="about-container">
                        <div class="left-about">
                            <h4>Information About me</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eveniet labore nihil obcaecati consequatur. Debitis error doloremque, 
                                vero eos vel nemo eius voluptatem dicta tenetur modi. <br /> <br /> La musica
                                delectus dolore fugiat exercitationem a, 
                                ipsum quidem quo enim natus accusamus labore dolores nam. Unde.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Harum non necessitatibus deleniti eum soluta.
                            </p>
                            <div class="btn-con">
                                <a href="#" class="main-btn">
                                    <span class="btn-text">Download CV</span>
                                    <span class="btn-icon"><i class="fas fa-download"></i></span>
                                </a>
                            </div>
                        </div>
                        <div class="right-about">
                            <div class="about-item">
                                <div class="abt-text">
                                    <p class="large-text">650+</p>
                                    <p class="small-text">Projects <br /> Completed</p>
                                </div>
                            </div>
                            <div class="about-item">
                                <div class="abt-text">
                                    <p class="large-text">10+</p>
                                    <p class="small-text">Years of <br /> experience</p>
                                </div>
                            </div>
                            <div class="about-item">
                                <div class="abt-text">
                                    <p class="large-text">300+</p>
                                    <p class="small-text">Happy <br /> Clients</p>
                                </div>
                            </div>
                            <div class="about-item">
                                <div class="abt-text">
                                    <p class="large-text">400+</p>
                                    <p class="small-text">Customer <br /> reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about-stats">
                        <h4 class="stat-title">My Skills</h4>
                        <div class="progress-bars">
                            <div class="progress-bar">
                                <p class="prog-title">html5</p>
                                <div class="progress-con">
                                    <p class="prog-text">80%</p>
                                    <div class="progress">
                                        <span class="html"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="progress-bar">
                                <p class="prog-title">css3</p>
                                <div class="progress-con">
                                    <p class="prog-text">95%</p>
                                    <div class="progress">
                                        <span class="css"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="progress-bar">
                                <p class="prog-title">javascript</p>
                                <div class="progress-con">
                                    <p class="prog-text">75%</p>
                                    <div class="progress">
                                        <span class="js"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="progress-bar">
                                <p class="prog-title">ReactJS</p>
                                <div class="progress-con">
                                    <p class="prog-text">75%</p>
                                    <div class="progress">
                                        <span class="react"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="progress-bar">
                                <p class="prog-title">NodeJS</p>
                                <div class="progress-con">
                                    <p class="prog-text">87%</p>
                                    <div class="progress">
                                        <span class="node"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="progress-bar">
                                <p class="prog-title">Python</p>
                                <div class="progress-con">
                                    <p class="prog-text">70%</p>
                                    <div class="progress">
                                        <span class="python"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 class="stat-title">My Timeline</h4>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="tl-icon">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <p class="tl-duration">2010 - present</p>
                            <h5>Web Developer<span> - Vircrosoft</span></h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                            </p>
                        </div>
                        <div class="timeline-item">
                            <div class="tl-icon">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <p class="tl-duration">2008 - 2011</p>
                            <h5>Software Engineer<span> - Boogle, Inc.</span></h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                            </p>
                        </div>
                        <div class="timeline-item">
                            <div class="tl-icon">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <p class="tl-duration">2016 - 2017</p>
                            <h5>C++ Programmer<span> - Slime Tech</span></h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                            </p>
                        </div>
                        <div class="timeline-item">
                            <div class="tl-icon">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <p class="tl-duration">2009 - 2013</p>
                            <h5>Business Degree<span> - Sussex University</span></h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                            </p>
                        </div>
                        <div class="timeline-item">
                            <div class="tl-icon">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <p class="tl-duration">2013 - 2016</p>
                            <h5>Computer Science Degree<span> - Brookes University</span></h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                            </p>
                        </div>
                        <div class="timeline-item">
                            <div class="tl-icon">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <p class="tl-duration">2017 - present</p>
                            <h5>3d Animation<span> - Brighton University</span></h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="container" id="portfolio">
                    <div class="main-title">
                        <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
                    </div>
                    <p class="port-text">
                        Here is some of my work that I've done in various programming languages.
                    </p>
                    <div class="portfolios">
                        <div class="portfolio-item">
                            <div class="image">
                                <img src="img/port1.jpg" alt=""/>
                            </div>
                            <div class="hover-items">
                                <h3>Project Source</h3>
                                <div class="icons">
                                    <a href="#" class="icon">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="#" class="icon">
                                        <i class="fab fa-behance"></i>
                                    </a>
                                    <a href="#" class="icon">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio-item">
                            <div class="image">
                                <img src="img/port2.jpg" alt=""/>
                            </div>
                            <div class="hover-items">
                                <h3>Project Source</h3>
                                <div class="icons">
                                    <a href="#" class="icon">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="#" class="icon">
                                        <i class="fab fa-behance"></i>
                                    </a>
                                    <a href="#" class="icon">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio-item">
                            <div class="image">
                                <img src="img/port3.jpg" alt=""/>
                            </div>
                            <div class="hover-items">
                                <h3>Project Source</h3>
                                <div class="icons">
                                    <a href="#" class="icon">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="#" class="icon">
                                        <i class="fab fa-behance"></i>
                                    </a>
                                    <a href="#" class="icon">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio-item">
                            <div class="image">
                                <img src="img/port4.jpg" alt=""/>
                            </div>
                            <div class="hover-items">
                                <h3>Project Source</h3>
                                <div class="icons">
                                    <a href="#" class="icon">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="#" class="icon">
                                        <i class="fab fa-behance"></i>
                                    </a>
                                    <a href="#" class="icon">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio-item">
                            <div class="image">
                                <img src="img/port5.jpg" alt=""/>
                            </div>
                            <div class="hover-items">
                                <h3>Project Source</h3>
                                <div class="icons">
                                    <a href="#" class="icon">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="#" class="icon">
                                        <i class="fab fa-behance"></i>
                                    </a>
                                    <a href="#" class="icon">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio-item">
                            <div class="image">
                                <img src="img/port2.jpg" alt=""/>
                            </div>
                            <div class="hover-items">
                                <h3>Project Source</h3>
                                <div class="icons">
                                    <a href="#" class="icon">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="#" class="icon">
                                        <i class="fab fa-behance"></i>
                                    </a>
                                    <a href="#" class="icon">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio-item">
                            <div class="image">
                                <img src="img/port7.jpg" alt=""/>
                            </div>
                            <div class="hover-items">
                                <h3>Project Source</h3>
                                <div class="icons">
                                    <a href="#" class="icon">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="#" class="icon">
                                        <i class="fab fa-behance"></i>
                                    </a>
                                    <a href="#" class="icon">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="container" id="blogs">
                    <div class="blogs-content">
                        <div class="main-title">
                            <h2>My <span>Blogs</span><span class="bg-text">My Blogs</span></h2>
                        </div>
                        <div class="blogs">
                            <div class="blog">
                                <img src="img/port6.jpg" alt=""/>
                                <div class="blog-text">
                                    <h4>
                                        How to Create Your Own Website
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                                    </p>
                                </div>
                            </div>
                            <div class="blog">
                                <img src="img/blog1.jpg" alt=""/>
                                <div class="blog-text">
                                    <h4>
                                        How to Become an Expert in Web Design
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                                    </p>
                                </div>
                            </div>
                            <div class="blog">
                                <img src="img/blog2.jpg" alt=""/>
                                <div class="blog-text">
                                    <h4>
                                        Become a Web Designer in 10 Days
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                                    </p>
                                </div>
                            </div>
                            <div class="blog">
                                <img src="img/blog3.jpg" alt=""/>
                                <div class="blog-text">
                                    <h4>
                                        Debbuging made easy with Web Inspector
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                                    </p>
                                </div>
                            </div>
                            <div class="blog">
                                <img src="img/port1.jpg" alt=""/>
                                <div class="blog-text">
                                    <h4>
                                        Get started with Web Design and UI Design
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                                    </p>
                                </div>
                            </div>
                            <div class="blog">
                                <img src="img/port3.jpg" alt=""/>
                                <div class="blog-text">
                                    <h4>
                                        This is what you need to know about Web Design
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="container contact" id="contact">
                    <div class="contact-container">
                        <div class="main-title">
                            <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
                        </div>
                        <div class="contact-content-con">
                            <div class="left-contact">
                                <h4>Contact me here</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    In, laborum numquam? Quam excepturi perspiciatis quas quasi.
                                </p>
                                <div class="contact-info">
                                    <div class="contact-item">
                                        <div class="icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                            <span>Location</span>
                                        </div>
                                        <p>
                                            : London, united Kingdom
                                        </p>
                                    </div>
                                    <div class="contact-item">
                                        <div class="icon">
                                            <i class="fas fa-envelope"></i>
                                            <span>Email</span>
                                        </div>
                                        <p>
                                            <span>: maclinzuniversal@gmail.com</span>
                                        </p>
                                    </div>
                                    <div class="contact-item">
                                        <div class="icon">
                                            <i class="fas fa-user-graduate"></i>
                                            <span>Education</span>
                                        </div>
                                        <p>
                                            <span>: Sussex University, East Sussex</span>
                                        </p>
                                    </div>
                                    <div class="contact-item">
                                        <div class="icon">
                                            <i class="fas fa-user-graduate"></i>
                                            <span>Mobile Number</span>
                                        </div>
                                        <p>
                                            <span>: 07522670617</span>
                                        </p>
                                    </div>
                                    <div class="contact-item">
                                        <div class="icon">
                                            <i class="fas fa-globe-africa"></i>
                                            <span>Languages</span>
                                        </div>
                                        <p>
                                            <span>: Afrikaans, English, Spanish</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="contact-icons">
                                    <div class="contact-icon">
                                        <a href="www.facebook.com" target="_blank">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="#" target="_blank">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                        <a href="#" target="_blank">
                                            <i class="fab fa-github"></i>
                                        </a>
                                        <a href="#" target="_blank">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="right-contact">
                                <form action="" class="contact-form"/>
                                    <div class="input-control i-c-2"/>
                                        <input type="text" required placeholder="YOUR NAME"/>
                                        <input type="email" required placeholder="YOUR EMAIL"/>
                                    <input></input><div></div>
                                    <div class="input-control">
                                        <input type="text" required placeholder="ENTER SUBJECT"/>
                                    </div>
                                    <div class="input-control">
                                        <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                                    </div>
                                    <div class="submit-btn">
                                        <a href="#" class="main-btn">
                                            <span class="btn-text">Download CV</span>
                                            <span class="btn-icon"><i class="fas fa-download"></i></span>
                                        </a>
                                    </div>
                                <form></form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        
            <div class="controls">
                <div class="control active-btn" data-id="home" >
                    <i class="fas fa-home"></i>
                </div>
                <div class="control" data-id="about-me">
                    <i class="fas fa-user"></i>
                </div>
                <div class="control" data-id="portfolio">
                    <i class="fas fa-briefcase"></i>
                </div>
                <div class="control" data-id="blogs">
                    <i class="far fa-newspaper"></i>
                </div>
                <div class="control" data-id="contact">
                    <i class="fas fa-envelope-open"></i>
                </div>
            </div>
            <div class="theme-btn">
                <i class="fas fa-adjust"></i>
            </div>
            <script src="app.js"></script>
        </body>
    );
}

export default MainPage;