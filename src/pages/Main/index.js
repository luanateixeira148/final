import HeaderLogOut from '../../comps/HeaderLogOut'; 
import PostNav from '../../comps/PostNav'; 
import Card from '../../comps/Card';
import './Main.scss';
import FitnessApp from '../../comps/Card/fitnessapp.jpeg'
import RestaurantApp from '../../comps/Card/restaurantapp.jpeg'
import DatingApp from '../../comps/Card/datingapp.jpeg'



const Main = () => {


return  <div className="main">  
            <div className="mainpage">
                <div className="header">
                <HeaderLogOut text="Discover"/>
                </div>

                <div className="CardScrollDiv">
                <Card Title="Surfing app redesign" Username="Emma Parsons" Number="3" Description="I redesigned this surfing app for my school project! Any feedback would be appreciated!"/>
                <Card Title="Fitness App" Username="Brian Shin" Number="5" Description="Due to COVID-19, people stay home, I created this app to help those individuals" Image={FitnessApp}/>
                <Card Title="NoLine" Username="Anthony Cervi" Number="13" Description="This app shows live restaurant wait times based on your location!" Image={RestaurantApp}/>
                <Card Title="Dating app" Username="Luana Teixeira" Number="7" Description="Please rate this dating app UI!" Image={DatingApp}/>
                </div>

                <div className="postnav">
                <PostNav />  
                </div>
            </div>
        </div>
}

export default Main;