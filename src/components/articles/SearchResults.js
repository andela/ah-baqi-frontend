import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, Icon } from 'antd';
import './SearchResults.scss';

export const SearchResults = ({ results }) => {
  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} className="icon-text" />
      {text}
    </span>
  );
  return (
    <div data-test="search-results-container" className="search-results">
      <h2>Search results</h2>
      <br />
      <List
        itemLayout="vertical"
        size="large"
        dataSource={results}
        renderItem={item => (
          <List.Item
            key={item.title}
            data-test="search-result-item"
            actions={[
              <IconText type="eye" text={item.views} />,
              <IconText type="star" text={item.rating} />,
              <IconText type="heart" text={item.likes} />,
              <IconText type="message" text={item.comments.length} />,
            ]}
            extra={(
              <img
                className="search-results-image"
                alt="article"
                src={item.image}
              />
                )}
          >
            <List.Item.Meta
              title={(
                <Link to={`/articles/${item.slug}`}>
                  {item.title}
                </Link>
              )}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  results: state.search.searchResults,
});

export default connect(
  mapStateToProps, null,
)(SearchResults);
