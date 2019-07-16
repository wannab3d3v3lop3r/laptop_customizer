import React, { Component } from 'react'

export class SummaryItem extends Component {
    render() {
        const {item, selected} = this.props;
        return (
            <div className="summary__option" key={item}>
                <div className="summary__option__label">{item}  </div>
                <div className="summary__option__value">{selected[item].name}</div>
                <div className="summary__option__cost">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(selected[item].cost) }
                </div>
            </div>
        )
    }
}

export default SummaryItem
