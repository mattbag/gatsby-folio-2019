import React, {Component} from 'react'
import Cell from './cell'
import BG1 from "../../images/drops/1.jpg"
import BG2 from "../../images/drops/2.jpg"
import BG3 from "../../images/drops/3.jpg"
import BG4 from "../../images/drops/7.jpg"
import BG5 from "../../images/drops/9.jpg"

import ImagesLoaded from 'react-images-loaded';

export default class Grid extends Component {
    constructor(){
        super()
        // this.state = {
        //     imagesLoaded : false
        // }
    }
    handleDone = () => {
        // console.log('====');
        // console.log('handleDone', this.props.classType);
        // console.log('====');
        // this.setState({imagesLoaded: true})
    }
    handleOnFail =  () => {
        console.log('====');
        console.log('handleOnFail',this.props.classType);
        console.log('====');
    }
    render() {
        return (
            <ImagesLoaded
                elementType={'div'} // defaults to 'div'
                className={`grid grid--layout-${this.props.classType || 1}`} // defaults to 'images-loaded-container'
                // onAlways={this.handleOnAlways}
                // onProgress={this.handleOnProgress}
                onFail={this.handleOnFail}
                done={this.handleDone}
                background=".cell" // true or child selector
            >
                <Cell bg={BG1} />
                <Cell bg={BG2} />
                <Cell bg={BG3} />
                <Cell bg={BG4} />
                <Cell bg={BG5} />
                <Cell bg={BG1} />
                <Cell bg={BG2} />
                <Cell bg={BG3} />
                <Cell bg={BG4} />
                <Cell bg={BG5} />
            </ImagesLoaded>
        )
    }
}
