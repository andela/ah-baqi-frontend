import React from 'react';
import { Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

import FeaturedArticles from './FeaturedArticles';

const articlesScroll = ({
  articles,
  fetchMoreData,
  nextPage,
  handleClick,
  hasMore,
}) => (
  <InfiniteScroll
    data-test="infinite-article-scroll"
    dataLength={articles.length}
    next={() => fetchMoreData(nextPage.split('?')[1])}
    hasMore={hasMore}
    loader={(
      <div className="fetured-loader">
        <Skeleton
          paragraph={{ rows: 2 }}
        />
      </div>
    )}
    endMessage={(
      <p className="fetured-loader">
        <b>Yay! You have seen it all</b>
      </p>
    )}
  >
    <FeaturedArticles
      handleClick={handleClick}
      articles={articles.slice(4)}
      data-test="featured-articles"
      key={nextPage || 'last-page'}
    />
  </InfiniteScroll>
);

export default articlesScroll;
