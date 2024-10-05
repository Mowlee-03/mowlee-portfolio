const Projectdesign = (props) => {
  function newtab() {
    window.open(props.url)
  }

  return (
    <>
      <div class="project-detail">
            <div class="project-imgdiv">
              <img
                src={props.img}
                alt="Project 1"
                class="project-img"
              />
              <div class="btn-container pos">
              <button onClick={newtab}
                class="btn btn-color-2 project-btn"
              >
                Live Demo
              </button>
            </div>
            </div>
            <h4 class="">{props.name}</h4>
          </div>
    </>
  )
}

export default Projectdesign
