import HeaderLogOut from '../../comps/HeaderLogOut'; 
import PostNav from '../../comps/PostNav'; 
import Card from '../../comps/Card';
import './Main.scss';


const Main = () => {


return  <div className="main">  
            <div className="mainpage">
                <div className="header">
                <HeaderLogOut text="Discover"/>
                </div>

                <div className="CardScrollDiv">
                <Card />
                <Card />
                <Card />
                <Card />
                </div>

                <div className="postnav">
                <PostNav />  
                </div>
            </div>
        </div>
}

export default Main;