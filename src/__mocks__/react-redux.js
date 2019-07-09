const mockDispatch = jest.fn(action => action);

module.exports = {
  connect: mapStateToProps => reactComponent => ({
    mapStateToProps,
    reactComponent,
    mockDispatch,
  }),
  Provider: ({ children }) => children,
};
