import axios from '../../utils/axios';
import store from '../../utils/testUtils';
import { firebaseAuthAction, socialAuthActions } from '../socialAuthActions';

jest.spyOn(axios, 'post');

const socialAuthResponse = {
  user: {
    email: 'ktrevzon@zeze.com',
    tokem: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
    username: 'ktrev',
  },
};

const providerMissing = {
  error: 'provider is required',
};


describe('testing firebse calls from twitter', () => {
  const myMock = jest.fn();
  beforeEach(() => {
    store.clearActions();
  });

  const firebaseResponse = {
    credentials: {
      accessToken: '1044559557983375360-uvsfrwszwBxeqiBFTRDmt9MKOQVtQ6',
      providerId: 'twitter.com',
      secret: 'bJbPAMPi5trUNaiT5zXuzXEvsfrwsuLhxsxHEQmKHyZi3',
      signInMethod: 'twitter.com',
    },
  };

  const twitterReqData = {
    token_provider: 'twitter',
    access_token: firebaseResponse.accessToken,
    access_token_secret: firebaseResponse.secret,
  };

  test('tests that firebase is called for twitter', async () => {
    const resDataFT = { ...firebaseResponse, ...socialAuthResponse };
    axios.post.mockImplementation(() => Promise.resolve({
      data: resDataFT,
    }));

    await store.dispatch(firebaseAuthAction(store.dispatch), store.dispatch(socialAuthActions(twitterReqData, 'twitter')));
    expect(store.getActions()[0].payload).toEqual(resDataFT);
    expect(store.getActions()[0].type).toEqual('TWITTER_AUTH');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('tests that firebase failed', async () => {
    const resDataFT = { ...firebaseResponse, ...socialAuthResponse };
    axios.post.mockImplementation(() => Promise.resolve({
      data: resDataFT,
    }));

    try {
      await store.dispatch(firebaseAuthAction(myMock));
    } catch (e) {
      expect(store.getActions()).toEqual([]);
      expect(myMock).toHaveBeenCalled();
    }
  });
});

describe('testing facebook and google signin', () => {
  beforeEach(() => {
    store.clearActions();
  });

  const reqData = {
    accessToken: '1044559557983375360-uvsfrwszwBxeqiBFTRDmt9MKOQVtQ6',
  };

  test('facebook signin', async () => {
    axios.post.mockImplementation(() => Promise.resolve({
      data: { ...socialAuthResponse },
    }));

    await store.dispatch(socialAuthActions(reqData, 'facebook'));
    expect(store.getActions()[0].payload).toEqual(socialAuthResponse);
    expect(store.getActions()[0].type).toEqual('FACEBOOK_AUTH');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('google signin', async () => {
    axios.post.mockImplementation(() => Promise.resolve({
      data: { ...socialAuthResponse },
    }));

    await store.dispatch(socialAuthActions(reqData, 'google'));
    expect(store.getActions()[0].payload).toEqual(socialAuthResponse);
    expect(store.getActions()[0].type).toEqual('GOOGLE_AUTH');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('no provider provided', async () => {
    axios.post.mockImplementation(() => Promise.resolve({
      data: { ...providerMissing },
    }));

    try {
      await store.dispatch(socialAuthActions(reqData, 'default provider'));
    } catch (e) {
      expect(store.getActions()).toEqual([]);
    }
  });
});
