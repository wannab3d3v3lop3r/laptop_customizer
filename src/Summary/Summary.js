import React, { Component } from 'react'
import SummaryItem from '../SummaryItem/SummaryItem'
import Total from '../Total/Total'

export class Summary extends Component {

    render() {

        const {selected} = this.props;

        return (
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {Object.keys(selected)
                    .map(item => 
                    <SummaryItem 
                        item={item} 
                        selected={selected} 
                    />)
                }
                <Total selected={selected}/>
            </section>
        )
    }
}

export default Summary
