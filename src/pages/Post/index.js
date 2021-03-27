import UploadImage from '../../comps/UploadImage';
import HeaderBack from '../../comps/HeaderBack';
import Button from '../../comps/Button';
import Input from '../../comps/Input';
import Description from '../../comps/Description';
import './Post.scss';
import { withRouter } from 'react-router';

import { useState } from 'react'
import axios from 'axios'

export default function App() {
    const [file, setFile] = useState()
    const [description, setDescription] = useState("")
    const [image, setImage] = useState()

    const submit = async event => {
        event.preventDefault()

        const formData = new FormData()
        formData.append("image", file)
        formData.append("description", description)

        const result = await axios.post('/images', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        setImage(result.data.imagePath)
    }

    // these are all the comps I made. I just made this page so I could view them while I worked on them


    return <div className="maincontent">

        <HeaderBack text="New Post"></HeaderBack>

        <div className="upload">
            <UploadImage
                onChange={e => setFile(e.target.files[0])}
                accept="image/*"
            ></UploadImage>
        </div>

        <div className="input">
            <Input label=""></Input>
            <Description label=""></Description>
        </div>

        <Button className="button" onSubmit={submit}></Button>

    </div>
}