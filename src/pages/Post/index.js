import UploadImage from '../../comps/UploadImage'; 
import HeaderBack from '../../comps/HeaderBack'; 
import Button from '../../comps/Button'; 
import Input from '../../comps/Input';
import Description from '../../comps/Description';
import './Post.scss';
import {withRouter} from 'react-router';

// these are all the comps I made. I just made this page so I could view them while I worked on them
const Post = () => {


return <div className="maincontent">

    <HeaderBack text="New Post"></HeaderBack>
    
    <div className="upload">
    <UploadImage></UploadImage>
    </div>

    <div className="input">
    <Input label=""></Input>
    <Description label=""></Description>
    </div>

    <Button></Button>
  
    
</div>
}

export default Post