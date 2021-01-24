'use strict';

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

// Text + chalk definitions
const data = {
  name: chalk.white('Mark Cross /'),
  handle: chalk.cyan('markdcross'),
  work: chalk.white('Full-stack web developer'),
  work2: chalk.white('leveraging over a decade of SaaS sales'),
  work3: chalk.white('and sales leadership experience'),
  twitter: chalk.cyan('twitter.com/markdcross'),
  github: chalk.cyan('github.com/markdcross'),
  linkedin: chalk.cyan('linkedin.com/in/markdcross'),
  web: chalk.cyan('markdcross.dev'),
  npx: chalk.white('npx markdcross'),
  labelWork: chalk.white.bold('      Work:'),
  // labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle}`;
const working = `${data.work}`;
const working2 = `${data.work2}`;
const working3 = `${data.work3}`;
// const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  working2 +
  newline +
  working3 +
  // twittering +
  newline +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding;

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.green(boxen(output, options))
);
