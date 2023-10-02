import { useEffect, useRef } from "react";
import { HomeStyle } from "./Home.styled";

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY;
    };

    const container = containerRef.current;
    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <HomeStyle ref={containerRef}>
      <main>
        <section className="intro">
          <h1 className="intro-title">Portfolio Website of Lenny Ruprecht</h1>
          <p className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            imperdiet nulla, non porta orci. Nunc sollicitudin nibh in tortor
            cursus, ut auctor nulla interdum. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Vivamus id elit lacinia, pharetra augue id, varius mi. In commodo
            augue non neque dignissim vestibulum.
          </p>
          <footer className="intro-footer">
            <button className="scroll-hint">Scroll</button>
          </footer>
        </section>
        <div className="projects-container">
          <section className="projects-section">
            <figure className="projects-figure">
              <img
                src="https://picsum.photos/1000/1000"
                alt="visual for project 1"
              />
            </figure>
            <div className="projects-content">
              <h2 className="project-title">Project 1</h2>
              <p className="project-description">This is a dummy description</p>
            </div>
          </section>
          <section className="projects-section">
            <figure className="projects-figure">
              <img
                src="https://picsum.photos/1000/1000"
                alt="visual for project 2"
              />
            </figure>
            <div className="projects-content">
              <h2 className="project-title">Project 2</h2>
              <p className="project-description">This is a dummy description</p>
            </div>
          </section>
          <section className="projects-section">
            <figure className="projects-figure">
              <img
                src="https://picsum.photos/1000/1000"
                alt="visual for project 3"
              />
            </figure>
            <div className="projects-content">
              <h2 className="project-title">Project 3</h2>
              <p className="project-description">This is a dummy description</p>
            </div>
          </section>
        </div>
      </main>
    </HomeStyle>
  );
};

export default Home;
