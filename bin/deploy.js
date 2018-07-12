/* eslint-disable no-var */

var path = require('path');
var branch = require('git-branch');
var ghPages = require('gh-pages');

function callback(error) {
  if (error) {
    console.error(error);
    process.exit(1);
  }
}

ghPages.publish(
  path.join(__dirname, '../storybook-static'),
  {
    add: true,
    dest: branch.sync(),
  },
  callback,
);
