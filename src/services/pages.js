import config from '../config';
import { AuthHeader } from '../helpers/auth-header'

export const pagesService = {
    pagesList,
    page,
    createPage,
    updatePage,
    deletePage
};

const apiUrl = config.apiUrl;

function pagesList(){
    const requestOptions = {
        method: 'GET',
        headers: { ...AuthHeader(), 'Content-Type': 'application/json' }
    };

    return fetch(`${apiUrl}/partner-pages`, requestOptions)
        .then(handleResponse)
        .then(pages => pages)
        .catch(error => error);
}


function page(id){
    
    const requestOptions = {
        method: 'GET',
        headers: { ...AuthHeader(), 'Content-Type': 'application/json'},
    };
    return fetch(`${apiUrl}/partner-pages?pid=${id}`, requestOptions)
        .then(handleResponse)
        .then(page => page)
        .catch(error => error);
}

// for demo purposes
function createPage(pageData){
    return Promise.resolve(true);
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { ...AuthHeader(), 'Content-Type': 'application/json' },
    //     body: JSON.stringify(pageData)
    // };
    // return fetch(`${apiUrl}/partner-pages`, requestOptions)
    //     .then(handleResponse)
    //     .then(createdPage => createdPage)
    //     .catch(error => error);
}

// for demo purposes
function updatePage(pageData){
    return Promise.resolve(true);
    // const requestOptions = {
    //     method: 'PUT',
    //     headers: { ...AuthHeader(), 'Content-Type': 'application/json',
    //      },
    //     body: JSON.stringify(pageData) 
    // };
    // return fetch(`${apiUrl}/partner-pages`, requestOptions)
    //     .then(handleResponse)
    //     .then(updatedPage => updatedPage)
    //     .catch(error => error);
}

function deletePage(id){
    const requestOptions = {
        method: 'DELETE',
        headers: { ...AuthHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({id: id})
    };
    return fetch(`${apiUrl}/partner-pages?pid=${id}`, requestOptions)
        .then(handleResponse)
        .then(deletePage => deletePage)
        .catch(error => error);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);        
        if (!response.ok || data.error) {
            const error = (data) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
