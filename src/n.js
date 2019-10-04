//path='/' component={Bt} exact
import * as myConsts from "./pages/Constants";
import {Home} from "./pages/homePage";
import CheckData from "./pages/dataView";

export const paths= [
    {
        path : "path='/' exact component={Home}"
    },
    {
        path : "path='/checkData' exact component={CheckData}"
    },
    {
        path : "path='/slider' exact component={Slider}"
    },
    {
        path : "path='/error' exact component={NotFound}"
    }
];


