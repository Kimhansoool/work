@echo off
chcp 65001
cls

if "%1" == "" goto ERR

echo ----------------------------------
echo 1. 프로젝트를 생성합니다.
echo ----------------------------------
echo $ yarn create react-app "%1"
call yarn create react-app "%1"
echo.

echo ----------------------------------
echo 2. 프로젝트를 yarn berry로 변경합니다.
echo ----------------------------------
echo $ cd "%1"
cd "%1"
echo.
echo $ yarn set version berry
call yarn set version berry
echo.
echo $ yarn install
call yarn install
echo.

echo ----------------------------------
echo 3. berry의 모드를 pnp로 변경합니다.
echo ----------------------------------
echo .yarnrc.yml과 package.json 파일을 수정합니다.
powershell -Command "(gc .yarnrc.yml) -replace 'node-modules', 'pnp' | Out-File -encoding utf8 .yarnrc.yml"

powershell -Command "(gc package.json) -replace 'eslintConfig', 'x-eslintConfig' | Out-File -encoding utf8 package.json"


echo ok.
echo.

echo $ yarn install
call yarn install
echo.

echo ----------------------------------
echo 4. 필수 패키지를 설치합니다.
echo ----------------------------------
call yarn add react-router-dom prop-types react-helmet-async sass styled-reset styled-components styled-components-breakpoints dayjs classnames lodash axios react-loader-spinner axios-hooks react-redux @reduxjs/toolkit redux-devtools-extension chart.js react-chartjs-2 react-intersection-observer
echo.

echo $ yarn add eslint-config-react-app -D
call yarn add eslint-config-react-app -D
echo.

echo ----------------------------------
echo 5. git 관련 파일들을 정리합니다.
echo ----------------------------------
echo $ rmdir /q /s .git
rmdir /q /s .git

echo $ del .gitignore
del .gitignore

echo ok.
echo.

echo ----------------------------------
echo 6. 프로젝트를 시작합니다.
echo ----------------------------------
echo $ yarn start
call yarn start
echo.

echo fin~!! :)
pause
goto :eof

:ERR
echo 프로젝트 이름을 지정하세요.
echo ex) react-app myproject

