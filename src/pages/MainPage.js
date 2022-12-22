import "./MainPage.css";

const MainPage = () => {
    return(
        <main className="MainPage">
            <div class="right-header">
                <h1 class="name">
                    Hi, I'm <span>Jordan D'Souza.</span>
                    A Computer Programmer.
                </h1>
                <p>
                    I'm a Web Developer, I love to create beautiful and functional websites.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!
                </p>
                <div class="btn-con">
                    <a href="" class="main-btn">
                        <span class="btn-text">Download CV</span>
                        <span class="btn-icon"><i class="fas fa-download"></i></span>
                    </a>
                </div>
            </div>
        </main>
    )
}
export default MainPage;