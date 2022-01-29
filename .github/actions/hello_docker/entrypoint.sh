#!/bin/sh 

#https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions


# nao esquece de dar permissao ao entrypoint.sh
# .github/actions/hello_docker/entrypoint.sh
echo "::debug::Debug message"
echo "::error::Error message"
echo "::warning::Warning message"

echo ::add-mask::$1
echo "Hello  $1"

echo "::group::Log group"
echo group
echo group
echo group
echo "::endgroup::"


time=$(date)
#time precisar ser o mesmo nome do arquivo action que esta sendo executado
echo "::set-output name=time::$time"

#https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable
# saida das variaveis, para o arquivo javascrpit
# usou a lib core, dai utilizou core.exportVariable
echo  "action_state=eu estou sendo exportado">> $GITHUB_ENV