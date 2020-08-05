const axios = require('axios');
var glob = require('glob');
var fs = require('fs');
var rimraf = require('rimraf');

function processFile(file) {
  return new Promise((_resolve, _reject) => {
    fs.readFile(file, (err, contents) => {
      const body = '' + contents;
      const filePieces = file.split('/');
      const fileName = filePieces.pop();
      const id = filePieces.pop();
      if (!JSON.parse(body)[`episode${id}`]) {
        rimraf.sync(`public/episode/${id}`);
      }
      _resolve();
    });
  });
}

function cleanup() {
  return new Promise((resolve, reject) => {
    glob('public/episode/**/*.json', {}, async (error, files) => {
      const filePromises = files.map((file) => processFile(file));
      await Promise.all(filePromises);
      resolve();
    });
  });
}

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
  onSuccess: async () => {
    await cleanup();
  },
};
