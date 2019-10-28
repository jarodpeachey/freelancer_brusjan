const path = require('path');
const videos = require('./src/videos.json');
const kontakts = require('./src/kontakts.json');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const videosTemplate = path.resolve('./src/templates/video-page.js');
  const kontaktsTemplate = path.resolve('./src/templates/kontakt-page.js');

  videos.forEach((videoItem) => {
    const videoPath = `/arbeid/${videoItem.slug}`;
    createPage({
      path: videoPath,
      component: videosTemplate,
      context: videoItem,
    });
  });

  kontakts.forEach((kontaktItem) => {
    const kontaktPath = `/kontakt/${kontaktItem.slug}`;
    createPage({
      path: kontaktPath,
      component: kontaktsTemplate,
      context: kontaktItem,
    });
  });
};
