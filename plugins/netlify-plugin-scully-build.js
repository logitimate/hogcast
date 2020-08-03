const axios = require('axios');

module.exports = {
  onPreBuild: async ({ inputs }) => {
    if (inputs.fullBuild) {
      await axios.get(
        `https://hogcast-services.herokuapp.com/api/episodes/reset-changes?fullRebuild=true`
      );
    }
  },
  onPostBuild: async ({ inputs }) => {
    await axios.get(
      `https://hogcast-services.herokuapp.com/api/episodes/reset-changes`
    );
  },
};
