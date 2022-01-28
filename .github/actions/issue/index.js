const core = require("@actions/core");
const github = require("@actions/github");

(async () => {
  try {
    const token = core.getInput("token");
    const body = core.getInput("body");
    const assignees = core.getInput("assignees");
    const title = core.getInput("title");
    //https://octokit.github.io/rest.js/v18
    const octokit = github.getOctokit(token);
    const { data } = await octokit.rest.issues.create({
      // owner: github.context.repo.owner,
      // repo: github.context.repo.repo,
      ...github.context.repo,
      title,
      body,
      //assignees e um array,yml não aceita array
      // entao o contrato vai ser usar | e aqui trato com split
      assignees: assignees ? assignees.split("\n") : undefined,
    });
    //data nao vai ser um objeto por isso stringify
    //primeiro parâmetro precisa ser idêntico declarado na saida do action
    core.setOutput("issue", JSON.stringify(data));
  } catch (error) {
    core.setFailed(error.message);
  }
})();
