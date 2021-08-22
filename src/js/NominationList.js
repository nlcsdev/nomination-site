import React from "react";
import { connect } from 'react-redux';
import { UPDATENOMINATION, REMOVENOMINATION } from '../root/actions';

const bg = require('../assets/images/bg.jpg');
const removeFilter = require("../assets/images/rfilter.png");

export const nominations = (state = [], action) => {
    switch (action.type) {
        case UPDATENOMINATION:
            let data = action.payload;
            let checkForExistingID = state.filter(x => x.imdbID == data.imdbID);

            if (checkForExistingID.length == 0) {
                let newState = [...state, data];
                return newState;
            }
            return state;
        case REMOVENOMINATION:
            let remove_target_index = state.findIndex(x => x.imdbID == action.payload.imdbID);
            if (remove_target_index != -1) {
                let newState = [...state];
                newState.splice(remove_target_index, 1);
                return newState;
            }
            return state;
        default:
            return state;
    }
}

class NominationList extends React.Component {
    constructor(props) {
        super(props);
        this.handle_remove_nomination = this.handle_remove_nomination.bind(this);
        this.nominated_element = this.nominated_element.bind(this);
    }

    handle_remove_nomination = (core_movie_data) => {
        this.props.dispatchRemoveNomination(core_movie_data);
    }

    nominated_element = (nomination_data, i) => {
        let pos = 13 + i * 17;
        let btn_style = {
            padding: "0px",
            position: "absolute",
            width: "21%",
            height: "17%",
            left: "0px",
            top: pos + "%",
            zIndex: 5
        }
        let txt_style = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            width: "79%",
            height: "17%",
            left: "21%",
            top: pos + "%"
        }
        let btn = (
            <button style={btn_style} className="nomination-list-btn" onClick={() => { this.handle_remove_nomination(nomination_data) }}>
                <img src={nomination_data.Poster} alt={nomination_data.Title} />
                <img className="filter filter-hover" src={removeFilter.default}/>
            </button>)
        let title = (
        <div className="nomination-list-text" style={txt_style}><p>{nomination_data.Title}</p></div>
        );
        return (
            <div key={"nomination_" + nomination_data.imdbID} className="nomination-elements-container" >
                {btn}
                {title}
            </div>
        );
    }

    render() {
        return (
            <div id='NominationList'>
                <div id="preview-container">
                    <img id="bg" src={bg.default} />
                    {this.props.nominations.map((e, i) => {
                        return this.nominated_element(e, i)
                    })}
                </div>
            </div>
        );
    }
}

const Remove_Nomination = (core_movie_data) => {
    return {
        type: REMOVENOMINATION,
        payload: core_movie_data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchRemoveNomination: (core_movie_data) => {
            dispatch(Remove_Nomination(core_movie_data));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        nominations: state.nominations
    }
}

const container = connect(mapStateToProps, mapDispatchToProps)(NominationList)

export default container;