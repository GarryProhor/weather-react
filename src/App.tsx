import React from 'react';
import {Home} from "./pages/Home/components/Home";
import {MonthStatistic} from "./pages/MonthStatistic/MonthStatistic";
import {Route, Routes} from "react-router";
import {Header} from "./shared/Header/Header";
import {Popup} from "./shared/Popup/Popup";


function App() {
    return (
        <div className='global-container'>
            {/*<Popup />*/}
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/"  element={<Home/>}/>
                    <Route path='/month-statistic'  element={<MonthStatistic/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
