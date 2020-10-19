import moment from 'moment';

const myPartners = (user, clientList, myPartners) => {
    const results = clientList && myPartners ? 
        clientList.filter(filter => {
            return filter.field_commission_agents_users_uid === user.uid
        }) : clientList ? clientList : {};

    return results;
}

const filter = (clientList, dateStart, dateEnd ) => {
    const results = clientList && dateStart ?
        clientList.filter(filter => {
            const regDateM = moment(filter.users_register_date);
            return regDateM.isBetween( dateStart, dateEnd, '()' );
        }) : clientList ? clientList : {};

    return results;
}

const search = (clientList, filterResults, searchField) => {
    const results = clientList && filterResults ? 
        filterResults.filter(report => {
            return JSON.stringify(report)
            .toLowerCase()
            .includes(searchField.toLocaleLowerCase())
        }) : {};

    return results;
}


export default {
    search,
    filter,
    myPartners
};
