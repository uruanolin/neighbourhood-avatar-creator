#!/bin/bash

#cd $HOME/git/iasistEditor/
cd $HOME/git/neighbourhood-avatar-creator/avatar-editor

grunt production
grunt --force

cd $HOME/git/neighbourhood-avatar-creator/avatar-editor/dist

cp -rf $HOME/git/neighbourhood-avatar-creator/avatar-editor/app/views .

#copia path estructure
#tar -cvzf editorDeploy.tar.gz ../git/iasistEditor/dist

cd $HOME/git/neighbourhood-avatar-creator/avatar-editor/dist

#tarName="frontendDistricteZero-deploy_$(date +%y-%m-%d_%H-%M).tar"
tarName="frontendDistricteZero-deploy.tar"


#tar -cvzf $tarName -C ../git/iasistEditor dist
tar -cvf $tarName -C $HOME/git/neighbourhood-avatar-creator/avatar-editor dist

scp $tarName u@212.24.106.168:/home/u

cd $HOME/git/neighbourhood-avatar-creator/avatar-editor

grunt development
