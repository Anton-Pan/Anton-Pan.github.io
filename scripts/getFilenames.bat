@echo off
setlocal

:: Ask the user for a directory input
set /p dir="Please enter the directory path: "

:: Check if the user input is not empty and if the directory exists
if "%dir%"=="" (
    echo No directory provided. Exiting...
    exit /b
)

if not exist "%dir%" (
    echo Directory does not exist. Exiting...
    exit /b
)

:: Extract the parent directory name
for %%d in (%dir%) do set "parentDir=%%~nd"

:: Create or overwrite the filenames.txt in the specified directory
> "%dir%\filenames.txt" (
    for %%f in (%dir%\*.*) do (
        echo %parentDir%\%%~nxf
    )
)

echo Filenames have been written to %dir%\filenames.txt
pause
