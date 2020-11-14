import React, {useState} from 'react'
import axios from 'axios'

export const FileUpload = () => {

    const [file, setFile] = useState('')
    const [fileName, setFileName] = useState('Choose a file')
    const [uploadedFile, setUploadedFile] = useState({})

    const onChange = (e) => {
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    }

    const handleSubmit =  async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)

        try{
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            })
            const {fileName, filePath} = res.data
            setUploadedFile({fileName, filePath})
        }catch(err){
            if(err.response.status === 500){
                console.log("there was an error")
            }else{
                console.log(err.response.data.msg)
            }
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" onChange={onChange}/>
                <label htmlFor="customFile" className="custom-file-label">{fileName}</label>
            </div>
            <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"/>
        </form>
        {uploadedFile ? <div className="row mt-5">
            <div className="col-md-6 m-auto">
                <h3 className="text-center">{uploadedFile.fileName}</h3>
                <img src={uploadedFile.filePath} style={{width: "100%"}} alt=""/>
            </div>
            </div>
            :
            null
            }
        </>
    )
}

export default FileUpload
