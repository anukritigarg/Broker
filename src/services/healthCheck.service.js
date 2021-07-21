const makeHealthCheckCall = ({}, req) => {
  return {
    message: 'Server is up and running!',
  };
};

module.exports = { makeHealthCheckCall };
