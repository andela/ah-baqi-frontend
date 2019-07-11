const mockAxios = jest.genMockFromModule('axios');
mockAxios.create = jest.fn(() => mockAxios);
mockAxios.get = jest.fn(() => Promise.resolve({ data: 'mocked' }));
mockAxios.post = jest.fn(() => Promise.resolve({
  data: {
    user: {
      username: 'testUser',
      token: 'testUserToken',
      message: 'User account created. An activation link has been sent to boniface22@gmail.com.',
      data: {
        username: 'boniface22',
        email: 'boniface22@gmail.com',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxOCwidXNlcm5hbWUiOiJib25pZmFjZTIyQGdtYWlsLmNvbSIsImV4cCI6MTU2MjgzNDc0OSwiZW1haWwiOiJib25pZmFjZTIyQGdtYWlsLmNvbSJ9.jxNLmZE5JC03tbT_Lnt6-Fwqcth5fWO-LMDqan7MP6c',
      },
    },
  },
}));

export default mockAxios;
