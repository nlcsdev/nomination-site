import React from 'react';

import SearchBar from './Searchbar';
import ContentContainer from './ContentContainer';
import HistoryList from './HistoryList';

//Container for all components
export default class MainPage extends React.Component {

    render() {
        return (
            <div id="main">
                <SearchBar />
                <ContentContainer />
                <HistoryList />
            </div>
        )

    }

}

