import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

// Actions
import { saveTweet } from 'appActions';

// App Components
import TweetCard from 'appComponents/TweetCard/TweetCard';

// Styled Components
import TweetListWrapper from './styles/TweetListWrapper';
import TweetListFooter from './styles/TweetListFooter';

class TweetsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      maxCount: 50,
      minCount: 0
    }
  }

  nextPage = () => {
    const { currentPage, maxCount, minCount } = this.state;
    this.setState({
      currentPage: currentPage + 1,
      maxCount: maxCount + 50,
      minCount: minCount + 50
    });
  };

  prevPage = () => {
    const { currentPage, maxCount, minCount } = this.state;
    this.setState({
      currentPage: currentPage - 1,
      maxCount: maxCount - 50,
      minCount: minCount - 50
    });
  };

  renderTweetCards = (data, i) => {
    const { path, saveTweet, tweets: { fav } } = this.props;

    // Local state data
    const { maxCount, minCount } = this.state;

    if(minCount <=i && maxCount > i) {

      const isFav = fav.filter( t => t.id === data.id);

      return (
        <TweetCard
          key={i}
          tweetData={data}
          saveTweet={saveTweet}
          path={path}
          isFav={isFav.length > 0}
        />
      )
    }

    return null;

  };

  render() {

    // Local state data
    const { currentPage } = this.state;

    //props
    const { path, tweets } = this.props;
    const { list: tweetsList, fav: favTweets } = tweets;

    // Switch Tweets data based on tthe route
    const listData = path === 'favourites' ? favTweets : tweetsList;

    // Total pages
    const totalPages = Math.round(listData.length / 50);

    return (
      <TweetListWrapper>
        {listData.map( (data, i) => this.renderTweetCards(data, i))}
        <TweetListFooter>
          <button
            onClick={this.prevPage}
            disabled={currentPage === 1}
          >
            <i className="fa fa-long-arrow-left" /> Prev
          </button>
          {listData.length > 0 &&
            <span>{`Page ${currentPage} of ${totalPages === 0 ? currentPage :totalPages}`}</span>
          }
          <button
            onClick={this.nextPage}
            disabled={listData.length / 50 <= currentPage}
          >
            Next <i className="fa fa-long-arrow-right" />
          </button>
        </TweetListFooter>
      </TweetListWrapper>
    )
  }
}

TweetsList.propTypes = {

};

// Redux state mapping
const mapStateToProps = state => ({
  tweets: state.tweets
});

// Dispatch Actions
const mapDispatchToProps = {
  saveTweet
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetsList);
