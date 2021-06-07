import React from 'react';

class HornedBeasts extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.describe}</p>
                <img src={this.props.image} title={this.props.title} alt={this.props.title}/>
            </div>
        )
    }
}

export default HornedBeasts;