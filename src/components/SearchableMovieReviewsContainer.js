import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import MovieReview from './MovieReviews'

const NYT_API_KEY = 'RmRPt9xAema9Ff6JPOb8hxJmKvvTJGkS';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
const api =  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state ={
        reviews: [],
        searchTerm: ''
    }

    handleSubmit = (e, search) => {
        
        e.preventDefault()
        fetch(URL+api+search)
        .then(resp => resp.json())
        .then(data => this.setState({reviews: data.results}))
        e.target.reset()
        
    }

    handleChange = e => {
        this.setState({searchTerm: e.target.value})
    }


    render(){
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={e => this.handleSubmit(e, this.state.searchTerm)}>
                   <label>Search Movie Reviews: </label>
                   <input onChange={e => this.handleChange(e)} type='text'/>
                   <input type ='submit'/> 
                </form>
                {this.state.reviews === null ? <h4>No Results Found</h4> : <MovieReview reviews={this.state.reviews}/>}
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer  