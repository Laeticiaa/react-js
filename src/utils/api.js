import * as request from 'request-promise'


/* Goodreads API */

export const ENDPOINTS = {
    //Find an author with a title
    GOODREADS_API_URL: 'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml',
}

/* REQUEST (Promise) DOCUMENTATION */
/* https://github.com/request/request-promise */

export function get( url, queryParameters ) {

    //returns a Promise which can be used with the async - await syntax

    return request.get( {
        json: true,
        uri: url,
        qs: queryParameters
    } )
}