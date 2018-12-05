import React, {Component} from 'react'
import Cell from './cell'
import BG from "../../images/drops/1.jpg"

import ImagesLoaded from 'react-images-loaded';

export default class Grid extends Component {
    constructor(){
        super()
        this.state = {
            imagesLoaded : false
        }
    }
    handleDone = () => {
        // console.log('====');
        // console.log('handleDone', this.props.classType);
        // console.log('====');
    }
    handleOnFail =  () => {
        // console.log('====');
        // console.log('handleOnFail',this.props.classType);
        // console.log('====');
        this.setState({imagesLoaded: true})
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
                <Cell bg={BG} />
                <Cell bg={BG} />
                <Cell bg={BG} />
                <Cell bg={BG} />
                <Cell bg={BG} />
            </ImagesLoaded>
        )
    }
}
