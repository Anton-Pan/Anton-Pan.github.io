@echo off
setlocal enabledelayedexpansion

:: Get the folder path and string
set /p "folderPath=Enter the folder path: "
set /p "appendString=Enter the string to prepend: "

:: Change to the specified directory
pushd "%folderPath%"

:: Initialize counter
set /a counter=1

:: Rename all files
for %%f in (*) do (
    set "fileExt=%%~xf"  :: Extract file extension and store in fileExt
    set "newName=%appendString%-!counter!!fileExt!"  :: Use fileExt in newName
    ren "%%f" "!newName!"
    set /a counter+=1
)

popd
pause