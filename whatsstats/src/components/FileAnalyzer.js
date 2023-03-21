import React from 'react'
import Button from '@mui/material/Button';


export const FileAnalyzer = (myFile) => {
  
    

    const readFile = (file) => {
        if (!file){
            return
        }
        console.log("hola")
    }

    return (
    <div>
        FileAnalyzer
        <Button onClick={e => readFile(myFile)} variant="contained" component="label"> Console Log </Button>

    </div>
  )
}
