import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReview from './MovieReviews'

const NYT_API_KEY = 'RmRPt9xAema9Ff6JPOb8hxJmKvvTJGkS';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    state={
        reviews: []
    }

    componentDidMount(){
        fetch(URL)
        .then(resp => resp.json())
        .then(data => this.setState({reviews: data.results}))
    }

    render(){
        return(
            <div className='latest-movie-reviews'>
                <h1>Latest Movie Reviews</h1>
                <MovieReview reviews={this.state.reviews}/>
            </div>
        )
    }

}

export default LatestMovieReviewsContainer