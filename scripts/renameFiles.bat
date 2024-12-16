@echo off
setlocal enabledelayedexpansion

:: Get the folder path
set /p "folderPath=Enter the folder path: "

:: Change to the specified directory
pushd "%folderPath%"

:: Initialize counters for horizontal and vertical images
set /a verticalCounter=1
set /a horizontalCounter=1

:: Rename all files
for %%f in (*) do (
    set "fileName=%%~nf"   :: Extract file name without extension
    set "fileExt=%%~xf"    :: Extract file extension

    :: Check if the filename contains "vertical" or "horizontal"
    echo !fileName! | findstr /i "vertical" >nul
    if !errorlevel! equ 0 (
        :: Vertical image
        ren "%%f" "vertical-!verticalCounter!!fileExt!"
        set /a verticalCounter+=1
    ) else (
        echo !fileName! | findstr /i "horizontal" >nul
        if !errorlevel! equ 0 (
            :: Horizontal image
            ren "%%f" "horizontal-!horizontalCounter!!fileExt!"
            set /a horizontalCounter+=1
        )
    )
)

popd
pause
