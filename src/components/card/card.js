import React, { Component } from 'react'
import './card.css'
export class Card extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        fetch('http://localhost:5000/api/project')
            .then(response => response.json())
            .then(response => this.setState({ data: response.response }))


    }
    render() {
        return (

            <div className='cards-body'>
                <div className='container-cards'>
                    {this.state.data && this.state.data.map((card) => (
                        <div className='cards' key={card._id}>
                            <img src={'http://localhost:5000/' + card.image} alt="project" />
                            <div className='content-card'>
                                <h1 className='title-card'>{card.title}</h1>
                                <p className='description-card'>{card.description}</p>
                                <a className='link-card' href={card.link} target='_blank'>i</a>
                            </div>
                        </div>
                    ))}
                
                </div>

            </div>
        )
    }
}

export default Card
