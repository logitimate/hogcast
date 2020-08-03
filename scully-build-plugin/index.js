module.exports = {
  onPreBuild: ({ inputs }) => {
    console.log('Hello world from onPreBuild event!');
    console.log(inputs.fullBuild); // bar
    if(inputs.fullBuild)
      fetch(`http://localhost:3333/api/episodes/reset-changes?fullRebuild=true`)
  },
  onPostBuild: ({ inputs }) => {
    console.log('toggle stuff off');
  },
};
