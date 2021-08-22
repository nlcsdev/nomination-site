import React from "react";
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button'
import { CAROUSELPREV } from '../root/actions'

class PrevBtn extends React.Component {

    constructor(props) {
        super(props);
        this.btnSelector = this.btnSelector.bind(this);
    }

    btnSelector = (x) => {
        return (<Button variant="primary" size="lg" onClick={this.props.dispatchCarouselPrev} active>{"(" + this.props.progress.length + "/5) Prev"}</Button>);
    }

    render() {
        return (
            this.btnSelector(this.props.progress)
        )
    }
}

const Carousel_Prev_Action = () => {
    return (
        {
            type: CAROUSELPREV
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
        dispatchCarouselPrev: () => { dispatch(Carousel_Prev_Action()) }
    }
}

const container = connect(mapStateToProps, mapDispatchToProps)(PrevBtn);
export default container;