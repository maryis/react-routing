import React from 'react';
import {Route, Switch} from 'react-router-dom';

import CheckData from "./pages/dataView";
import {Home} from "./pages/homePage";
import {SlideBar} from "./pages/slideBar";
import {MenuBar} from "./pages/menuBar";
import {NotFound} from "./pages/NotFound";
import Slider from "./pages/slider";
import CarouselPage from "./pages/carouselPage";

class MasterPage extends React.Component {

    constructor(props) {
        super(props);
        console.log("master:");
        console.log(props);
    }

    render() {
        return (
            <div className="container">



                <div className="row">
                    <div className="col-sm-12">
                        <MenuBar className="bg-light"> </MenuBar>
                    </div>
                </div>
                <div className='row height_row '>
                    <div className="col-sm-3">
                        <SlideBar/>
                    </div>
                    <div className="col-sm-9 align-content-center text-sm-center text-success">

                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/checkData' exact component={CheckData}/>
                            <Route path='/slider' exact component={CarouselPage}/>
                            <Route path='/mySlider' exact component={Slider}/>
                            <Route  component={NotFound}/>

                        </Switch>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <MenuBar className="bg-secondary"> </MenuBar>
                    </div>
                </div>
            </div>


        )
    }
}

export default MasterPage;