# Create custom actions
Criando custom actions com docker e javascript

## Motivação
Aprofundar nas feature do gihub actions

## Feature
- Para criar meus actions em javascript usei o [toolkit]( https://github.com/actions/toolkit)
- Esta e a documentação do [octokit](https://octokit.github.io/rest.js/v18)
- Com essas libs fica fácil criar os actions
- Foi criado um action para lidar com issues criados repositório
- Um arquivo action trabalha com conceito de entrada e saída
- As entradas do action podem, vim de um script sh, javascript, php qualquer linguagem
- No exemplo com javascript pego as entradas do arquivo com o  [toolkit]( https://github.com/actions/toolkit)
- E no yml que vai usar no nosso action ele e obrigado a implementar o token, title, body e assignes para não gerar erro no seu job
- O arquivo que esta usando nosso action implementa oque e obrigatório usando a palavra reservada with
- A saída do custom actions nesse caso e objeto do issue
- E quem esta usando nosso action consegue capturar fazendo referência com id no steep

``` yml
name: Action issue

author: kenjimaeda54
description: "Opens a github issue"

inputs:
  token:
    description: "Github token"
    required: true
  title:
    description: "Title issue"
    required: true
  body:
    description: "Body issue"
    required: true
  assignees:
    description: "Who is open issue"
    required: true

outputs:
  issue: # id do issue open
    description: "The issue is object as json string"

runs:
  using: "node16"
  main: "dist/index.js"

```

``` javascript

## 
 const token = core.getInput("token");
 const body = core.getInput("body");
 const assignees = core.getInput("assignees");
 const title = core.getInput("title");
    //https://octokit.github.io/rest.js/v18
 core.setOutput("issue", JSON.stringify(data));
##
```
``` yml
  - name: Open issue
        uses: ./.github/actions/issue
        id: issue
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          title: Problem with url do github
          body: I opened issue why i cant access ao repo do github
          # aqui e assim porque o contrato e um array e estamos tratando por \ no index
          # so e possivel fazer assign para usuários existentes
          assignees: |
            kenjimaeda54

      - run: |
          echo 'Issue ${{ steps.issue.outputs.issue }}'


```
