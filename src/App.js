/* ROOT Component of your App  */
import React, { Component } from 'react'
import logo from './open-book.svg'
import './App.css'
import picture from './Book_Image1.jpg'


const Materialize = window.Materialize
var xmlToJSON = window.xmlToJSON

const APP_TITLE = 'Who wrote it?'
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS } from './utils/api'

//components
import GoodreadsCard from './components/GoodReads'

class App extends Component {

    constructor( props ) {
        super( props )
        this.state = {
            book_data: undefined,
            title: '',
        }
    }

    render() {
        return (
            <div className="App">

                <div className="App-header">
                    <h1>{ APP_TITLE } &nbsp; </h1>
                    <img src={ logo } className="App-logo" alt="logo" />
                </div>


                <div className="App-content">
                    <body>
                        <img alt="" className="book-img" />
                    </body>


                    <div className="center-align">
                        <form onSubmit={ this.fetchGoodreads } >

                            <div className="input-field col s6 offset-s3" >
                                <label htmlFor="book_title">Books title</label>
                                <input id="books_title" type="text" value={ this.state.title } onChange={ this.handleChange } />
                            </div>

                            <button type="submit" className="waves-effect waves-red btn"> Find author</button>

                        </form>
                    </div>
                    <div className="row" style={ { marginTop: 50 } } >
                        <div className="display info">{ this.displayBookData() }</div>
                    </div>

                </div>

            </div>

        )
    }

    handleChange = ( event ) => {
        this.setState( {
            title: event.target.value
        } )
    }


    //method triggered by onSubmit event of the form or by onClick event of the "Weather?" button
    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchGoodreads = async ( event ) => {

        event.preventDefault()

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            let book_data = await get( ENDPOINTS.GOODREADS_API_URL, {
                //API key
                key: 'uxOIB1nkggl5XWZ9SKPWzg',
                //Query: the title of a book
                q: this.state.title,
            } )

            //data format JSON car format XML initiallement 
            var dataJson = xmlToJSON.parseString( book_data, {
                childrenAsArray: false
            } )

            var Ar = dataJson.GoodreadsResponse.search.results.work
            if ( Ar.length > 1 )
                this.setState(
                    {
                        book_data: dataJson.GoodreadsResponse.search.results.work
                    }
                )
            else {
                this.setState(
                    {
                        book_data: [ dataJson.GoodreadsResponse.search.results.work ]
                    }
                )
            }
        }

        catch ( error ) {
            Materialize.toast( error, 8000, 'error-toast' )
            console.log( 'Failed fetching data: ', error )
        }

    }


    //handle display of the received weather object
    displayBookData = () => {
        const book_data = this.state.book_data
        if ( book_data ) {

            return book_data.map( function ( book ) {

                var a = book.best_book.author.name._text
                var title = book.best_book.title._text
                var pic = book.best_book.image_url._text
                var average = [ book.average_rating._text ]

                function filtred_average( average ) {
                    if ( average >= 4.00 ) {
                        return true;
                    }
                    average = null;
                    return false;
                }

                var filtred_a = average.filter( filtred_average )
                if ( filtred_a != false ) {
                    return <GoodreadsCard title={ title } author={ a } picture={ pic } mark={ filtred_a } />
                }

            } )

        }
    }

};

export default App
