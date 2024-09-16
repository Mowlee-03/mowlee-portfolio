import React from 'react'
import checkmark from '../../Assets/checkmark.png'
import './skill.css'
const Skill = () => {
  return (
    <>
    <section id="skills">
    <h1 class="title1">Skills</h1>
    <div class="skill-details-container">
        <div class="skills-div">
          <h2 class="skill-sub-title">Soft Skills</h2>
          <div class="article-container">
            <article>
              <img
                src={checkmark}
                alt="skill icon"
                class="icon1"
              />
              <div>
                <h3>Good Communication</h3>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="skill icon"
                class="icon1"
              />
              <div>
                <h3>Problem Solving</h3>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="skill icon"
                class="icon1"
              />
              <div>
                <h3>Adapatabillity</h3>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="skill icon"
                class="icon1"
              />
              <div>
                <h3>Time Management</h3>
              </div>
            </article>
            <article>
            <img
                src={checkmark}
                alt="skill icon"
                class="icon1"
              />
              <div>
                <h3>Presentation Skills</h3>
              </div>
            </article>
            <article>
            <img
                src={checkmark}
                alt="skill icon"
                class="icon1"
              />
              <div>
                <h3>Creativity</h3>
              </div>
            </article>
          </div>
        </div>
        <div class="skills-div">
          <h2 class="skill-sub-title">Hard Skills</h2>
          <div class="article-container">
            <article>
              <img
                src={checkmark}
                alt="skill icon"
                class="icon1"
              />
              <div>
                <h3>HTML</h3>
              </div>
            </article>
            <article>
              <img
             src={checkmark}
                alt="skill icon"
                class="icon1"
              />
              <div>
                <h3>CSS</h3>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="skill icon"
                class="icon1"
              />
              <div>
                <h3>JAVA Script</h3>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="skill icon"
                class="icon1"
              />
              <div>
                <h3>React JS</h3>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="skill icon"
                class="icon1"
              />
              <div>
                <h3>Front End Developement</h3>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="skill icon"
                class="icon1"
              />
              <div>
                <h3>Content Creator</h3>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="skill icon"
                class="icon1"
              />
              <div>
                <h3>Photoshop</h3>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="skill icon"
                class="icon1"
              />
              <div>
                <h3>Editing</h3>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="skill icon"
                class="icon1"
              />
              <div>
                <h3>Tally</h3>
              </div>
            </article>
            <article>
              <img
                src={checkmark}
                alt="skill icon"
                class="icon1"
              />
              <div>
                <h3>MS Office</h3>
              </div>
            </article>
          </div>
        </div>
      </div>
    <p class="more">Explore Detaily..</p>
  </section>

    </>
  )
}

export default Skill
