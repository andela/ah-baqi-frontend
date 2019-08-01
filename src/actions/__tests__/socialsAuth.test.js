import { instance } from '../../utils/axios';
import store, { socialAuthTest } from '../../utils/testUtils';
import { firebaseAuthAction, socialAuthActions } from '../socialAuthActions';


jest.spyOn(instance, 'post');

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
    instance.post.mockImplementation(() => Promise.resolve({
      data: resDataFT,
    }));

    await store.dispatch(firebaseAuthAction())
      .then(() => store.dispatch(socialAuthActions(twitterReqData, 'twitter')));
    expect(store.getActions()[0].payload).toEqual(resDataFT);
    expect(store.getActions()[0].type).toEqual('TWITTER_AUTH');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});

describe('testing facebook and google signin', () => {
  beforeEach(() => {
    store.clearActions();
  });

  const reqData = {
    accessToken: '1044559557983375360-uvsfrwszwBxeqiBFTRDmt9MKOQVtQ6',
  };

  socialAuthTest(socialAuthResponse, socialAuthActions, reqData, 'facebook', 'FACEBOOK_AUTH');
  socialAuthTest(socialAuthResponse, socialAuthActions, reqData, 'google', 'GOOGLE_AUTH');

  test('no provider provided', async () => {
    instance.post.mockImplementation(() => Promise.resolve({
      data: { ...providerMissing },
    }));

    try {
      await store.dispatch(socialAuthActions(reqData, 'default provider'));
    } catch (e) {
      expect(store.getActions()).toEqual([]);
    }
  });
});
