// https://github.com/actions/toolkit

const core = require("@actions/core");
const github = require("@actions/github");

try {
  // throw new Error("Something went wrong");
  //tem que ser mesmo input que eta no actions
  core.debug("Debug message");
  core.warning("Warning message");
  core.error("Error message");

  const name = core.getInput("who-to-greet");
  // no actions o who-to-greet é um input
  // e o nome esta world
  // por isso vai aparecer hello world
  core.setSecret(name);
  console.log(`Hello ${name}!`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  core.startGroup("Click here for looking object");
  console.log(JSON.stringify(github, null, "\t"));
  core.endGroup();
  //essa varinel vai ser exportada
  //primeiro parâmetro é o nome da variavel
  //segundo parâmetro é o valor
  core.exportVariable("HELLO", "hello");
} catch (e) {
  core.setFailed(e.message);
}
