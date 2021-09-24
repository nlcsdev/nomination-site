import React from "react";
import { connect } from 'react-redux';
import { UPDATENOMINATION, REMOVENOMINATION } from "../root/actions";

const selectFilter = require("../assets/images/sfilter.png");
const removeFilter = require("../assets/images/rfilter.png");

//A button component for each movie.
class MovieElement extends React.Component {
    constructor(props) {
        super(props);
        this.handle_nomination = this.handle_nomination.bind(this);
        this.handle_remove_nomination = this.handle_remove_nomination.bind(this);
        this.AppropriateButton = this.AppropriateButton.bind(this);
    }

    //Relevant info pertaining to the button.
    core_movie_data = {
        Title: this.props.movie_info.Title,
        imdbID: this.props.movie_info.imdbID,
        Poster: this.props.movie_info.Poster
    };

    handle_nomination = () => {
        this.props.dispatchNominate(this.core_movie_data);
    }

    handle_remove_nomination = () => {
        this.props.dispatchRemoveNomination(this.core_movie_data);
    }

    //The button when it can nominate itself.
    SelectableButton = (
        <button className={this.props.parentPanel} onClick={() => { this.handle_nomination() }}>
            <img src={this.props.movie_info.Poster} alt={`Title: ${this.props.movie_info.Title}`} />
            <img className="filter filter-hover" src={selectFilter.default} />
        </button>
    );

    //The button when the movie is already nominated and can used to remove the movie.
    RemovableButton = (
        <button className={this.props.parentPanel} onClick={() => { this.handle_remove_nomination() }}>
            <img src={this.props.movie_info.Poster} alt={`Title: ${this.props.movie_info.Title}`} />
            <img className="filter filter-active" src={selectFilter.default} />
            <img className="filter filter-hover" src={removeFilter.default} />
        </button>
    );
    
    //The button when the nomination list is capped and no more movies can be nominated.
    InactiveButton = (
        <button className={this.props.parentPanel} disabled>
            <img className="greyscale" src={this.props.movie_info.Poster} alt={`Title: ${this.props.movie_info.Title}`} />
        </button>
    )

    //Select the appropriate button to display.
    AppropriateButton = () => {

        if (this.props.nominations.filter(x => x.imdbID == this.props.movie_info.imdbID).length > 0) {
            return this.RemovableButton;
        } else if (this.props.nominations.length >= 5) {
            return this.InactiveButton;
        } else {
            return this.SelectableButton;
        }
    }

    render() {
        //Element shows movie title on hover.
        return (
            <div className="MovieElement">
                <div title={this.props.movie_info.Title}>
                    <this.AppropriateButton />
                </div>
            </div>
        )
    }
}
const Nominate = (core_movie_data) => {
    return {
        type: UPDATENOMINATION,
        payload: core_movie_data
    }
}

const Remove_Nomination = (core_movie_data) => {
    return {
        type: REMOVENOMINATION,
        payload: core_movie_data
    }
}

const mapStateToProps = (state) => {
    return {
        nominations: state.nominations
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        //Dispatch an action to nominate a movie.
        dispatchNominate: (core_movie_data) => {
            dispatch(Nominate(core_movie_data));
        },
        //Dispatch an action to remove a nomination.
        dispatchRemoveNomination: (core_movie_data) => {
            dispatch(Remove_Nomination(core_movie_data));
        }
    }
}
const container = connect(mapStateToProps, mapDispatchToProps)(MovieElement);

export default container;