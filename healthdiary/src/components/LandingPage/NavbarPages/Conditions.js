import React from 'react'
import '../../../styles/conditions.css'
import { conditionsData } from './ConditionData'

function Conditions() {
    return (
        <>
            <h2>Health Conditions and Symptoms </h2>
          <div className="row">
            <div className="col">
              
            <div className="tabs">
              {conditionsData.map(i=>(
                <div className="tab">
                  <input type="checkbox" id={i.value} />
                  <label className="tab-label" htmlFor={i.value}>{i.label}</label>
                  <div className="tab-content">
                    {i.data}
                    {console.log(i)}
                    <h3>Symptoms</h3>
                    {i.symptoms}
                  </div>
                </div>
              ))}
              </div>
          </div>
          
        </div>
        </>
    )
}

export default Conditions
