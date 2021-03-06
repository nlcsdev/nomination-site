import React from 'react';
import { connect } from 'react-redux';
import { UPDATERESULT } from '../root/actions';
import MovieElement from './MovieElement';

//Keeps track of the search result returned from omdb
export const result = (state = '', action) => {
    switch (action.type) {
        case UPDATERESULT:
            let data = action.payload;
            return data;

        default:
            return state;
    }
}

//Search result component that displays search results
class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.Success_Search_Result = this.Success_Search_Result.bind(this);
    }

    //Render each search result as a MovieElement component, a button that can be used for nominating or de-nominating.
    Success_Search_Result = () => {
        return this.props.data.Search.map((e) => {
            return (<MovieElement key={"search_" + e.imdbID} parentPanel="search-result-btn" movie_info={e} />)
        });
    }

    render() {
        if (this.props.data != null) {
            if (this.props.data.hasOwnProperty("Search")) {
                return (
                    <div className='search-result'>
                        <div id="search-result-elements-container">
                            <this.Success_Search_Result />
                        </div>
                    </div>);
            } else {
                //If the Search key does not exist, then an error has occured, therefore display the error instead.
                return (
                    <div className='search-result'>
                        <p> {this.props.data.Error} </p>
                    </div>
                );
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.result
    }
};

const container = connect(mapStateToProps, null)(SearchResult)

export default container;