import config from '../config';
import { AuthHeader } from '../helpers/auth-header';

export const partnerService = {
    partnerList,
    topAll,
    topAllTime,
    topMonth,
    topLocal,
};

const apiUrl = config.apiUrl;

function partnerList() {
    const cdata = localStorage.getItem('cdata') ? JSON.parse(localStorage.getItem('cdata')) : null;
    if (cdata) return Promise.resolve(cdata);

    const requestOptions = {
        method: 'GET',
        headers: { ...AuthHeader(), 'Content-Type': 'application/json' }
    };
    return fetch(`${apiUrl}/partners`, requestOptions)
        .then(handleResponse)
        .then(partners => {
            localStorage.setItem('cdata', JSON.stringify(partners));
            return partners;
        })
        .catch(error => error);
}

function topAll() {
    const requestOptions = {
        method: 'GET',
        headers: { ...AuthHeader(), 'Content-Type': 'application/json' }
    };
    return fetch(`${apiUrl}/top-all`, requestOptions)
        .then(handleResponse)
        .then(top => top)
        .catch(error => error);
}

function topAllTime() {
    const requestOptions = {
        method: 'GET',
        headers: { ...AuthHeader(), 'Content-Type': 'application/json' }
    };
    return fetch(`${apiUrl}/top-all-time`, requestOptions)
        .then(handleResponse)
        .then(top => top)
        .catch(error => error);
}

function topMonth() {
    const requestOptions = {
        method: 'GET',
        headers: { ...AuthHeader(), 'Content-Type': 'application/json' }
    };
    return fetch(`${apiUrl}/top-month`, requestOptions)
        .then(handleResponse)
        .then(top => top)
        .catch(error => error);
}

function topLocal() {
    const requestOptions = {
        method: 'GET',
        headers: { ...AuthHeader(), 'Content-Type': 'application/json' }
    };
    return fetch(`${apiUrl}/top-local`, requestOptions)
        .then(handleResponse)
        .then(top => top)
        .catch(error => error);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok || data.error) {
            const error = data || response.statusText;
            return Promise.reject(error);
        }
        
        return data;
    });
}