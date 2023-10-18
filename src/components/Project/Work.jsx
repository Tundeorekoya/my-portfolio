import { projectData } from "./Data"
import WorkItems from "./WorkItems"
const Work = () => {
  return (
    <div>
        <div className='work-filters'>
        </div>
        <div className="work-container container grid">
                {
                 projectData.map((item)=>{
                    return <WorkItems item={item} key={item}/>
                 })
                }
        </div>
    </div>
  )
}

export default Work
