@ECHO OFF

cd ./test/unit
checkfile = `ls | grep ".spec.ts" | tr -s "\n" " "`
jest --collectCoverage --reporters default jest-stare --findRelatedTests $checkfile