import React from "react";
import { connect } from 'react-redux';

import { UPDATENOMIMGDATA, REQUESTNOMIMGDATA } from "../root/actions";

import Button from 'react-bootstrap/Button'

import axios from 'axios';

//Keeps track of the last nomination result.
export const nomination_img_meta = (state = { data: "", json: "" }, action) => {
    switch (action.type) {
        case UPDATENOMIMGDATA:
            return { data: action.payload.img, json: action.payload.event };
        default:
            return state;
    }
}

//Is the site awaiting for backend data to return?
export const awaiting_nomination_img = (state = false, action) => {
    switch (action.type) {
        case REQUESTNOMIMGDATA:
            return true;
        case UPDATENOMIMGDATA:
            return false;
        default:
            return state;
    }
}

//Button to send all relevant info to backend for processing.
class SubmitBtn extends React.Component {

    constructor(props) {
        super(props);
        this.requestImgJson = this.requestImgJson.bind(this);
        this.requestImgGeneration = this.requestImgGeneration.bind(this);
    }

    //JSON stringify nomination data
    requestImgJson = () => { return JSON.stringify(this.props.nominations) }

    requestImgGeneration = () => {
        //If nomination data is not cached, then this nomination is new, therefore dispatch to request a download of a new image.
        if (this.props.nominations.toString() != this.props.nomination_img.json.toString()) {
            let request_json = this.requestImgJson();
            this.props.dispatchDownload(request_json);
        //If nomination data is the same as the previous, simply return a cached version of the image.
        } else {
            downloadImg(this.props.nomination_img.data);
        }

    }

    //Button when available to download image.
    downloadBtn = <Button onClick={() => { this.requestImgGeneration(); }} variant="primary" size="lg" active>Download</Button>

    //Button when request to download image is made but awaiting result.
    loadingBtn = <Button className="rel transparent-font" variant="primary" size="lg" disabled>Download<div className="lds-dual-ring" /></Button>

    //Display the approriate button accordingly.
    render() {
        if (this.props.awaiting) {
             return (this.loadingBtn);
        } else {
            return (this.downloadBtn);
        }
    }
}

const Update_NomImg_Data_Action = (NomImg_Meta) => {
    return {
        type: UPDATENOMIMGDATA,
        payload: NomImg_Meta
    }
}

const Request_NomImg_Data_Action = () => {
    return {
        type: REQUESTNOMIMGDATA
    }
}

const mapStateToProps = (state) => {
    return {
        nominations: state.nominations,
        nomination_img: state.nomination_img_meta,
        awaiting: state.awaiting_nomination_img
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //Make request to AWS to process image and return the result.
        dispatchDownload: (request_param) => {
            dispatch(Request_NomImg_Data_Action());
            let postUrl = "https://nod4m44snb.execute-api.us-east-2.amazonaws.com/production/nominationImage/generate";
            axios.post(postUrl, { data: request_param })
                .then((res) => {
                    dispatch(Update_NomImg_Data_Action(res.data));
                    return res.data.img;
                }).then((img) => {
                    downloadImg(img);
                }
                )
        }
    }
}

//The data returned is in base64, download the data in jpeg format.
function downloadImg(imgData) {
    let imgURL = "data:image/jpeg;base64, ";
    imgURL += imgData;
    const dl = document.createElement('a');
    dl.href = imgURL;
    dl.download = 'result.jpeg';
    document.body.appendChild(dl);
    dl.click();
    document.body.removeChild(dl);
}

const container = connect(mapStateToProps, mapDispatchToProps)(SubmitBtn);
export default container;