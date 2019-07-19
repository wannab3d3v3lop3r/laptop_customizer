import React from 'react'
import TechItem from '../Tech/TechItem'

export default function TechList(props) {
  const {features, selected, updateFeature} = props;

    return (
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            {Object.entries(features)
              //iterating the PROCESSOR FEATURES from index.js
              .map(([computerItem, items], index) => {
                const techItems = items.map((item, i) => {
                  //iterating inside keys inside the object feature, propped from index.js
                  const selectedClass = item.name === selected[computerItem].name ? 'feature__selected' : '';
                  //this returns the two elements from the array features
                  return <TechItem
                          key={`${computerItem} ${i}`}
                          item={item} 
                          computerItem={computerItem} 
                          featureClass={`feature__option ${selectedClass}`} 
                          updateFeature={updateFeature}
                      />
                })

                //returns the names of the keys of features array
                return <div className="feature" key={computerItem}>
                  <div className="feature__name">{computerItem}</div>
                  <ul className="feature__list">
                    { techItems }
                  </ul>
                </div>
              })}
        </section>
    )
}
