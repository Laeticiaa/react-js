import React, { Component } from 'react'

import './GoodReads.css'

class GoodreadsCard extends Component {

    // THIS COMPONENT TAKES A 'data' object as "props"
    //DATA FORMAT SENT BY THE API :
    /*
        book_data =
        {
            <GoodreadsResponse>
            <Request>
                <authentication>true</authentication>
                <key><![CDATA[uxOIB1nkggl5XWZ9SKPWzg]]></key>
                <method><![CDATA[search_index]]></method>
            </Request>
            <search>
            <query><![CDATA[demain]]></query>
                <results-start>1</results-start>
                <results-end>20</results-end>
                <total-results>805</total-results>
                <source>Goodreads</source>
                <query-time-seconds>0.18</query-time-seconds>
                <results>
                    <work>
            <id type="integer">24073171</id>
            <books_count type="integer">32</books_count>
            <ratings_count type="integer">4180</ratings_count>
            <text_reviews_count type="integer">526</text_reviews_count>
            <original_publication_year type="integer">2013</original_publication_year>
            <original_publication_month type="integer">1</original_publication_month>
            <original_publication_day type="integer">1</original_publication_day>
            <average_rating>4.14</average_rating>
            <best_book type="Book">
                <id type="integer">17338675</id>
                <title>Demain</title>
                <author>
                <id type="integer">282080</id>
                <name>Guillaume Musso</name>
                </author>
                <image_url>https://images.gr-assets.com/books/1360224126m/17338675.jpg</image_url>
                <small_image_url>https://images.gr-assets.com/books/1360224126s/17338675.jpg</small_image_url>
            </best_book>
            </work>

       
        }
    */

    //<img alt="" className="news-img" src={ author_pic } />
    render() {

        //const book_data = this.props.book_data
        const { title, author, picture, mark } = this.props

        return (


            <div className="col s12 m7">
                <div className="card horizontal">

                    <div className="card-image">
                        <img alt="" className="book-img" src={ picture } />
                        <span className="card-title">Book information</span>
                    </div>

                    <div className="card-content">
                        <div className="row" >
                            <table>
                                <tbody>
                                    <tr>
                                        <td width={ 100 }>Author :</td>
                                        <td width={ 200 }>
                                            <span> { author }</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width={ 100 } >Title :</td>
                                        <td width={ 200 }>
                                            <span> { title }</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width={ 100 } >Mark :</td>
                                        <td width={ 200 }>
                                            <span> { mark }</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>





        )
    }

}

export default GoodreadsCard