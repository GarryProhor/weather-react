import React from 'react';
import {Home} from "./pages/Home/components/Home";
import {MonthStatistic} from "./pages/MonthStatistic/MonthStatistic";
import {Route, Routes} from "react-router";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path='/month-statistic'  element={<MonthStatistic/>}/>
            </Routes>
        </div>
    );
}

export default App;
