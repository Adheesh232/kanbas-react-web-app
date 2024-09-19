import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> 
      <hr />
      <div id="wd-dashboard-courses">
        
        
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack software developer</p>
              <button> Go 
                
              </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/2345/Home">
            <img src="/images/javascript.png" width={200} />
            <div>
              <h5>CS2345 JavaScript</h5>
              <p className="wd-dashboard-course-title">Frontend Developer</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/3456/Home">
            <img src="/images/python.png" width={200} />
            <div>
              <h5>CS3456 Python</h5>
              <p className="wd-dashboard-course-title">Data Science and Machine Learning</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/4567/Home">
            <img src="/images/java.png" width={200} />
            <div>
              <h5>CS4567 Java</h5>
              <p className="wd-dashboard-course-title">Backend Development</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

    
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5678/Home">
            <img src="/images/csharp.jpg" width={200} />
            <div>
              <h5>CS5678 C#</h5>
              <p className="wd-dashboard-course-title">Object-Oriented Programming</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/6789/Home">
            <img src="/images/htmlcss.png" width={200} />
            <div>
              <h5>CS6789 HTML & CSS</h5>
              <p className="wd-dashboard-course-title">Web Development Basics</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/7890/Home">
            <img src="/images/angular.png" width={200} />
            <div>
              <h5>CS7890 Angular</h5>
              <p className="wd-dashboard-course-title">Frontend Frameworks</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
