import React from "react";
import { connect } from 'react-redux';

import SearchResult from "./SearchResult";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";
import SubmitBtn from "./SubmitBtn";
import NominataionList from "./NominationList";

import Carousel from 'react-bootstrap/Carousel'

import { CSSTransition } from 'react-transition-group';

import { CAROUSELNEXT, CAROUSELPREV, UPDATERESULT, UPDATENOMINATION } from '../root/actions'

export const carousel_state = (state = { index: 0, animate: true, showCarousel: false }, action) => {
    switch (action.type) {

        case CAROUSELNEXT:
            return { index: 1, animate: true, showCarousel: true };

        case CAROUSELPREV:
            return { index: 0, animate: true, showCarousel: true };

        case UPDATENOMINATION:
            if (!state.showCarousel) {
                return { index: 1, animate: true, showCarousel: true };
            } else {
                return state;
            }

        case UPDATERESULT:
            return { index: 0, animate: true, showCarousel: true };

        default:
            return state;
    }
}

class ContentContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CSSTransition in={this.props.showCarousel} timeout={1000} classNames="main-content">
                <div className='main-content'>
                    <Carousel controls={false} activeIndex={this.props.index} interval={null} indicators={false} slide={this.props.animate} >
                        <Carousel.Item>
                            <div id="search-result-container">
                                <div className='page-header'>
                                    <h2>Search Results</h2>
                                    <NextBtn />
                                </div>
                                <SearchResult />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div id="nomination-list-container">
                                <div className='page-header'>
                                    <h2>Your Nominations</h2>
                                    <div>
                                        <PrevBtn />
                                        <SubmitBtn />
                                    </div>
                                </div>

                                <NominataionList />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </CSSTransition>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        index: state.carousel_state.index,
        animate: state.carousel_state.animate,
        showCarousel: state.carousel_state.showCarousel
    }
}

const container = connect(mapStateToProps, null)(ContentContainer);
export default container;
