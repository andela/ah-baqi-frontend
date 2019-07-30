import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../../reducers/index';
import FollowUnfollow, {UnconnectedFollowUnfollow} from '../../profile/FollowUnfollow';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

describe('<FollowUnfollow /> ', () => {
  const store = configureStoreItem();
  test('it renders correctly', () => {
    const props = {
      articleData: {author: 'null'}
    }
    const followers = [{}]
    localStorage.setItem('followers',JSON.stringify(followers))
    const wrapper = mount(<Provider store={store}><FollowUnfollow {...props} /></Provider>)
    let button = wrapper.find("[data-test='follow-container']")
    expect(button).toHaveLength(1);

    wrapper.setState({labelText: 'Follow'});
    button.simulate('click');
    expect(wrapper.state().labelText).toEqual('Follow');
    

    wrapper.setState({labelText: 'Following'});
    button.simulate('click');
    expect(wrapper.state().labelText).toEqual('Following');

    let articleDataMock = jest.fn()
    let fetchFollowersMock = jest.fn()
    const prop = {
      articleData: articleDataMock,
      fetchFollowers: fetchFollowersMock,
    }
    let unconnected = shallow(<UnconnectedFollowUnfollow {...prop}/>)
    unconnected.instance().hasFollowed('bill',[]);
    unconnected.instance().hasFollowed('bill',[{username: 'bill'}]);
    expect(unconnected.instance().hasFollowed).toBeInstanceOf(Function)
  })
})