const path = require('path');
const data = require('./src/videos.json');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const template = path.resolve('./src/templates/video_page.js');

  data.forEach((videoItem) => {
    const path = `/arbeid/${videoItem.slug}`;
    createPage({
      path,
      component: template,
      context: videoItem,
    });
  });
};
