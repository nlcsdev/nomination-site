import React from "react";
import { connect } from 'react-redux';

import { UPDATENOMIMGDATA, REQUESTNOMIMGDATA } from "../root/actions";

import Button from 'react-bootstrap/Button'

import axios from 'axios';

export const nomination_img_meta = (state = { data: "", json: "" }, action) => {
    switch (action.type) {
        case UPDATENOMIMGDATA:
            return { data: action.payload.img, json: action.payload.event };
        default:
            return state;
    }
}

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


class SubmitBtn extends React.Component {

    constructor(props) {
        super(props);
        this.requestImgJson = this.requestImgJson.bind(this);
        this.requestImgGeneration = this.requestImgGeneration.bind(this);
    }

    requestImgJson = () => { return JSON.stringify(this.props.nominations) }

    requestImgGeneration = () => {
        if (this.props.nominations.toString() != this.props.nomination_img.json.toString()) {
            let request_json = this.requestImgJson();
            this.props.dispatchDownload(request_json);
        } else {
            downloadImg(this.props.nomination_img.data);
        }

    }

    downloadBtn = <Button onClick={() => { this.requestImgGeneration(); }} variant="primary" size="lg" active>Download</Button>

    loadingBtn = <Button className="rel transparent-font" variant="primary" size="lg" disabled>Download<div className="lds-dual-ring" /></Button>

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