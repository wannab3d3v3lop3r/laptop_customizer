import React from 'react'

export default function TechItem(props) {
    return (
        <li className="feature__item">
          <div className={props.featureClass}
            
            onClick={e => props.updateFeature(props.computerItem, props.item)}>
              { props.item.name }
              ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(props.item.cost) })
          </div>
        </li>
    )
}

TechItem.defaultProps = {
  featureClass: '',
  updateFeature: () => {},
  item: {}, // name, cost
  computerItem: ''
}