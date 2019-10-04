import React from 'react'
import * as imgList from './Constants'
import '../styles.css'

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentId: 0
        }
        setInterval(this.replaceImg, 3000);
    }


    replaceImg = () => {
        let i = this.state.currentId;

        if (i === 2)
            i = 0;
        else
            i = i + 1;

        this.setState(
            {
                currentId: i
            }
        )
    }


    render() {

        return (
            <div >
                <a className="prev" >&#10094;</a>

                <img   className="img-fluid"
                    src={imgList.images[this.state.currentId].src} alt={imgList.images[this.state.currentId].alt}/>
                <a className="next">&#10095;</a>
            </div>

        );
    }
}

export default Slider;