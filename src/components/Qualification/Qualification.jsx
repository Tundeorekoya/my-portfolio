import { useState } from "react"
import "./Qualification.css"

const Qualification = () => {
    const [ toggle, SetToggle ] = useState(1)

    const toggleTab= (index)=>{
        SetToggle(index);
    }
  return (
    <div>
      <section className='qualification-section'>
        <h2 className='section-title'>Qualification</h2>
        <span className='section-subtitle'>My Journey</span>


        <div className='qualification-container container'>
        <div className='qualification-tabs'>
            <div className={toggle === 1 ? "qualification-button qualification-active button--flex":"qualification-button  button--flex"} onClick={()=>toggleTab(1)}>
                <i className='uil uil-graduation-cap qualification-icon'></i>{ " "}
                Education
            </div>
            <div className='qualification-tabs'>
            <div className={toggle === 2 ? "qualification-button qualification-active button--flex":"qualification-button  button--flex"} onClick={()=>toggleTab(2)}>
                <i className='uil uil-briefcase qualification-icon'></i>{ " "}
                Experience
            </div>
        </div>
        </div>
        

       

        <div className='qualification-sections'>
            <div className={toggle=== 1 ? "qualification-content qualification-content-active":"qualification-content"}>
                <div className="qualification-data">
                    <div>
                        <h3 className='qualification-title'>Web Design</h3>
                        <span className='qualification-subtitle'>Yaba-college-0f-tech</span>
                        <div className='qualification-calendar'>
                            <i className='uil uil-calendar-alt'></i>
                            2021 - present
                        </div>
                    </div>


                    <div>
                        <span className='qualification-rounder'></span>
                        <span className='qualification-line'></span>
                    </div>
                </div>


                <div className="qualification-data">
                    <div></div>
                    <div>
                        <span className='qualification-rounder'></span>
                        <span className='qualification-line'></span>
                    </div>
                    
                    <div>
                        <h3 className='qualification-title'>Art Director</h3>
                        <span className='qualification-subtitle'>Yaba-college-0f-tech</span>
                        <div className='qualification-calendar'>
                            <i className='uil uil-calendar-alt'></i>
                            2021 - 2022
                        </div>
                    </div>
                </div>

                <div className="qualification-data">
                    <div>
                        <h3 className='qualification-title'>Web Development</h3>
                        <span className='qualification-subtitle'>Yaba-college-0f-tech</span>
                        <div className='qualification-calendar'>
                            <i className='uil uil-calendar-alt'></i>
                            2018 - 2020
                        </div>
                    </div>


                    <div>
                        <span className='qualification-rounder'></span>
                        <span className='qualification-line'></span>
                    </div>
                </div>


                <div className="qualification-data">
                    <div></div>
                    <div>
                        <span className='qualification-rounder'></span>
                        <span className='qualification-line'></span>
                    </div>
                    
                    <div>
                        <h3 className='qualification-title'>ux expert</h3>
                        <span className='qualification-subtitle'>Yaba-college-0f-tech</span>
                        <div className='qualification-calendar'>
                            <i className='uil uil-calendar-alt'></i>
                            2017-2018
                        </div>
                    </div>
                </div>

            </div>

            <div className={toggle=== 2 ? "qualification-content qualification-content-active":"qualification-content"}>
                <div className="qualification-data">
                    <div>
                        <h3 className='qualification-title'>Product</h3>
                        <span className='qualification-subtitle'>Google-nigeria</span>
                        <div className='qualification-calendar'>
                            <i className='uil uil-calendar-alt'></i>
                            2021 - present
                        </div>
                    </div>


                    <div>
                        <span className='qualification-rounder'></span>
                        <span className='qualification-line'></span>
                    </div>
                </div>


                <div className="qualification-data">
                    <div></div>
                    <div>
                        <span className='qualification-rounder'></span>
                        <span className='qualification-line'></span>
                    </div>
                    
                    <div>
                        <h3 className='qualification-title'>Ui Designer</h3>
                        <span className='qualification-subtitle'>Apple Inc-Nigeria</span>
                        <div className='qualification-calendar'>
                            <i className='uil uil-calendar-alt'></i>
                            2021 - 2022
                        </div>
                    </div>
                </div>

                <div className="qualification-data">
                    <div>
                        <h3 className='qualification-title'>Web Designer</h3>
                        <span className='qualification-subtitle'>Figma</span>
                        <div className='qualification-calendar'>
                            <i className='uil uil-calendar-alt'></i>
                            2018 - 2020
                        </div>
                    </div>


                    <div>
                        <span className='qualification-rounder'></span>
                        <span className='qualification-line'></span>
                    </div>
                </div>
            </div>
        </div>


        </div>
      </section>
    </div>
  )
}

export default Qualification
