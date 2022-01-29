# Create custom actions
Criando custom actions com docker e javascript

## Motivacao
Aprofundar nas feature do gihub actions

## Feature
- Para criar os actions em javascript usei o [toolkit]( https://github.com/actions/toolkit)
- Esta e a documentacao do [octokit](https://octokit.github.io/rest.js/v18)
- Com essas libs fica facil criar os actions,foi criado um action para quando e gerado um issue no repositorio
- Um arquivo action para criar seus custom action trabalha com conceito de entrada e saida
- As entradas do action podem vim de um script sh,javascript,php qualquer linguagem
- No exemplo com javascript pego as entradas do arquivo com o  [toolkit]( https://github.com/actions/toolkit)
- E no yml que vai usar no nosso action ele e obrigado a implementar o token,title,body e assignes para nao gerar erro no seu job

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
