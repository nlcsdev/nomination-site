import React from "react";
import { connect } from "react-redux";
import { UPDATENOMINATION, UPDATEHISTORY } from "../root/actions";
import MovieElement from "./MovieElement";


export const history = (state = [], action) => {
    switch (action.type) {
        case UPDATENOMINATION:
            let current_storage_json = localStorage.getItem("recent_nominations");
            let new_history = [...state];
            let data = action.payload;
            if (current_storage_json != null) {
                new_history = JSON.parse(current_storage_json);
            }

            if (new_history.length > 5) {
                let length = new_history.length;
                new_history = new_history.slice(length - 5, length - 1);
            }

            let checkForExistingID = new_history.filter(x => x.imdbID == data.imdbID);
            if (checkForExistingID.length == 0) {
                if (new_history.length == 5) {
                    new_history = new_history.slice(1,5);                    
                }
                new_history.push(data);
                localStorage.setItem("recent_nominations", JSON.stringify(new_history));
            }           
            
            return new_history;

        default:
            return state;
    }
}

class HistoryList extends React.Component {
    constructor(props) {
        super(props);
        this.HistoryDisplay = this.HistoryDisplay.bind(this);
    }

    HistoryDisplay = () => {
        if (this.props.history.length > 0) {
            return this.props.history.map((e) => {
                return (<li key={e.imdbID}><MovieElement parentPanel="history-list-btn" movie_info={e} /></li>)
            });
        } else {
            let RecentNominations = localStorage.getItem("recent_nominations");
            if (RecentNominations != null) {
                let parseStorage = JSON.parse(RecentNominations);
                return parseStorage.map((e) => {
                    return (<li key={e.imdbID}><MovieElement parentPanel="history-list-btn" movie_info={e} /></li>)
                });
            }
            return <br />;
        }
    }
    render() {
        return (
            <div id="HistoryList">
                <div>
                    <h3>Recent Nominations</h3>
                    <ul>
                        <this.HistoryDisplay />
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

const container = connect(mapStateToProps, null)(HistoryList);

export default container;