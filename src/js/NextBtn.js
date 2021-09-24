import React from "react";
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button'
import { CAROUSELNEXT } from '../root/actions'

//Button to show nomination panel.
class NextBtn extends React.Component {

    constructor(props) {
        super(props);
        this.btnSelector = this.btnSelector.bind(this);
    }

    btnSelector = (x) => {
        return (<Button variant="primary" size="lg" onClick={this.props.dispatchCarouselNext} active>{"(" + this.props.progress.length + "/5) Next"}</Button>);
    }

    render() {
        return (
            this.btnSelector(this.props.progress)
        )
    }
}

const Carousel_Next_Action = () => {
    return (
        {
            type: CAROUSELNEXT
        }
    )
};

const mapStateToProps = (state) => {
    return {
        progress: state.nominations
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCarouselNext: () => { dispatch(Carousel_Next_Action()) }
    }
}

const container = connect(mapStateToProps, mapDispatchToProps)(NextBtn);
export default container;