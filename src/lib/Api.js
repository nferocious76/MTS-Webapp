import axios from 'axios';

const kBaseURL = 'http://localhost:4776'

function get(path, res, err) {

    let url = `${kBaseURL}/${path}`;
    axios.get(url)
    .then(res)
    .catch(err);
}

function post(path, params, res, err) {

    let url = `${kBaseURL}/${path}`;
    axios.post(url, params)
    .then(res)
    .catch(err);
}

export default {

    get,
    post
}