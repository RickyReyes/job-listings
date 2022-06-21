import { useState, useEffect } from "react"
import data from "./data"
import './App.css';

export default function App() {
  const [jobData, setJobData] = useState(data)
  const [filters, setFilters] = useState([])

  const addFilter = (name) => {
    if (filters.includes(name)) {
      return
    } else {
      setFilters(prevFilters => [...prevFilters, name])
    }
  }

  const removeFilter = (name) => {
    let newFilters = filters.filter(filter => filter !== name)
    setFilters(newFilters)
  }
  
  const jobCards = jobData.filter(job => {
    let cardFilters = [job.role, job.level, ...job.languages, ...job.tools]
    if (filters.length == 0) {
      return job
    } else if (filters.every(filter => cardFilters.includes(filter))) {
      return job
    }
  }).map((job, idx) => {
    let cardFilters = [job.role, job.level, ...job.languages, ...job.tools]
    return (
      <li className="card" key={idx}>
        <img src={job.logo} className="card--company-logo" />
        <div className="card--desktop-flex-middle">
          <div className="card--company-and-tags">
            <p className="card--company">{job.company}</p>
            {job.new && <p className="card--new">new!</p>}  
            {job.featured && <p className="card--featured">featured</p>}
          </div>
          <h2 className="card--job-title">{job.position}</h2>
          <div className="card--info">
            <p>{job.postedAt}</p>
            <span>&#8226;</span> 
            <p>{job.contract}</p>
            <span>&#8226;</span> 
            <p>{job.location}</p>
          </div>
        </div>
        <ul className="card--filter-list">
          {cardFilters.map(filter => <li onClick={() => addFilter(filter)}>{filter}</li>)}
        </ul>
      </li>
    )
})

  return (
    <div className="App">
      <header>
      <svg xmlns="http://www.w3.org/2000/svg" width="375" height="156"><path fill="#63BABA" fillRule="evenodd" d="M-86.732 487.429c-51.432-51.425-51.438-134.806-.013-186.237l.013-.013L309.926-95.424c51.441-51.434 134.836-51.434 186.277 0C547.634-44 547.64 39.38 496.216 90.813c-.005.004-.01.008-.013.013L99.543 487.429c-51.44 51.433-134.834 51.433-186.275 0zm-444.692 71.824c-51.432-51.424-51.438-134.806-.013-186.237l.013-.013L-134.766-23.6C-83.325-75.034.07-75.034 51.511-23.6c51.431 51.424 51.437 134.805.013 186.237l-.013.013-396.66 396.603c-51.44 51.433-134.834 51.433-186.275 0z"/></svg>
      </header>
      <main>
        {filters.length > 0 && 
        <div className="filters--container">
          <ul className="filters--ul">
            {filters.map((filter, idx) => (
              <li onClick={() => removeFilter(filter)} className="filters--filter" key={idx}>
                <p>{filter}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
              </li>
            ))}
          </ul>
          <p onClick={() => setFilters([])} className="clear">Clear</p>
        </div>
        }
        <ul className="card--ul">
          {jobCards}
        </ul>
      </main>
    </div>
  );
}