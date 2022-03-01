@echo off
REM 声明采用UTF-8编码
chcp 65001
 
title GIT一键提交
color 3
echo 当前目录是：%cd%
echo;
 
echo 开始添加变更：git add .
git add .
echo;
 
set /p declation=输入提交的commit信息:
git commit -m "%declation%"
echo;
 
echo 将变更情况提交到远程主分支：git push
git push
echo;
 
echo 将dist文件夹提交到gt-pages分支： git subtree push --prefix .vuepress/dist origin gh-pages
git subtree push --prefix .vuepress/dist origin gh-pages
echo;
 
echo 执行完毕！
echo;
 
pause