// https://github.com/actions/toolkit

const core = require("@actions/core");
const github = require("@actions/github");

try {
  //tem que ser mesmo input que eta no actions
  const name = core.getInput("who-to-greet");
  // no actions o who-to-greet é um input
  // e o nome esta world
  // por isso vai aparecer hello world
  console.log(`Hello ${name}!`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  console.log(JSON.stringify(github, null, "\t"));
} catch (e) {
  core.setFailed(e.message);
}
