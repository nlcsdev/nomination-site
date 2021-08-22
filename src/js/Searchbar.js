import React from 'react';
import { connect } from 'react-redux';
import { SEARCH, UPDATERESULT } from '../root/actions';

import { CSSTransition } from 'react-transition-group';

import axios from 'axios';

export const input = (state = '', action) => {
    switch (action.type) {
        case SEARCH:
            return action.payload;
        default:
            return state;
    }
}



class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.makeRequest = this.makeRequest.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    makeRequest() {
        this.props.dispatchMakeRequest(this.props.input);
    }
    handleChange(event) {
        this.props.dispatchHandleChange(event.target.value);
    }

    comp() {
        return (

            <CSSTransition in={this.props.showCarousel} timeout={1000} classNames="search-bar">
                <div className="search-bar">
                    <CSSTransition in={this.props.showCarousel} timeout={1000} classNames="search-bar-field">
                        <div className="search-bar-field">
                            <h2>Search Here!</h2>
                            <div id="SearchField">
                                <input type="text" placeholder="Search.." name="search" onChange={this.handleChange} />
                                <button type="submit" onClick={() => { this.makeRequest(); }}>Search</button>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
            </CSSTransition>

        );
    }


    render() {

        return (
            this.comp()
        );
    }
}

const Handle_Change_Action = (user_input) => {
    return (
        {
            type: SEARCH,
            payload: user_input
        }
    )
};

const Process_Request_Result_Action = (resJson) => {
    return (
        {
            type: UPDATERESULT,
            payload: resJson
        }
    )
};

const mapStateToProps = (state) => {
    return {
        input: state.input,
        showCarousel: state.carousel_state.showCarousel
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchMakeRequest: (user_input) => {
            let url = "https://nlcsdev-proxy.herokuapp.com/search?i=" + user_input;
            axios.get(url)
                .catch((e) => console.log("Error Get: " + e))
                .then((res) => {
                    dispatch(Process_Request_Result_Action(res.data));
                }
                )
        },
        dispatchHandleChange: (user_input) => {
            dispatch(Handle_Change_Action(user_input));
        }

    }
};
const container = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default container;