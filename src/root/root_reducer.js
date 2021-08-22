import { input } from '../js/Searchbar';
import { result } from '../js/SearchResult';
import { nominations } from '../js/NominationList';
import { history } from '../js/HistoryList';
import { carousel_state } from '../js/ContentContainer';
import { nomination_img_meta, awaiting_nomination_img } from '../js/SubmitBtn';

import { combineReducers } from "redux";

export default combineReducers({
    input,
    result,
    nominations,
    history,
    carousel_state,
    nomination_img_meta,
    awaiting_nomination_img
})