
const Projectdesign = (props) => {
  return (
    <>
      <div class="project-detail">
            <div class="project-imgdiv">
              <img
                src={props.img}
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="">{props.name}</h2>
            <div class="btn-container">
              <a href={props.gitlink}>
              <button
                class="btn btn-color-2 project-btn"
              >
                Github
              </button>
              </a>
              
              <a href={props.url}>
              <button
                class="btn btn-color-2 project-btn"
              >
                Live Demo
              </button>
              </a>
              
            </div>
          </div>
    </>
  )
}

export default Projectdesign