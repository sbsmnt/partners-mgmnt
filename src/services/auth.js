import config from '../config';
import { AuthHeader } from '../helpers/auth-header';

export const authService = {
    login,
    isLoggedIn,
    logout,
};

const apiUrl = config.apiUrl;

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: username, password: password })
    };
    return fetch(`${apiUrl}/login`, requestOptions)
        .then(handleResponse)
        .then(user => handleUserData(user))
        .catch(error => error);
}

function isLoggedIn(token) {
    const requestOptions = {
        method: 'POST',
        headers: { ...AuthHeader(), 'Content-Type': 'application/json' },
    };
    return fetch(`${apiUrl}/islogged`, requestOptions)
        .then(handleResponse)
        .then(user => user)
        .catch(error => error);
    
}

function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('cdata');
    return Promise.resolve(true);
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

function handleUserData(user) {
    const userAdress = {
        street: user.user.address.thoroughfare,
        local: user.user.address.locality,
        post_code: user.user.address.postal_code,
    };
    const points = user.user.field_points;
    const pointsDate = (user.user.field_points === 1) ? user.user.field_points_date : '';
    const userCategory = user.user.commission_agent_category.lenght ? user.user.commission_agent_category : '';

    return {
        uid: user.user.uid,
        token: user.token,
        name: user.user.full_name,
        email: user.user.mail,
        phone: user.user.phone_number,
        country_code: user.user.phone_country_code,
        address: userAdress,
        companyName: user.user.company_name,
        picture: user.user.picture,
        status: user.status,
        category: userCategory,
        roles: user.user.roles,
        points: points,
        pointsDate: pointsDate
    };
}