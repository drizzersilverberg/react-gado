import React, { Component } from 'react'
// import FCCHeader from './components/FCCHeader'
// import FCCMainContent from './components/FCCMainContent'
// import FCCFooter from './components/FCCFooter'
// import Greet from './components/Greet'
import './FreeCodeCampApp.css'
// import FCCTodoApp from './components/FCCTodoApp'
// import FCCContactApp from './FCCContactApp'
// import FCCJokeApp from './FCCJokeApp'
// import FCCStoreApp from './FCCStoreApp'
// import FCCClassBasedApp from './FCCClassBasedApp'
// import FCCCounterApp from './components/FCCCounterApp'
import FCCConditionalRenderingApp from './FCCConditionalRenderingApp'

export default class FreeCodeCampApp extends Component {
    render() {
        return (
            <div id="freecodecamp-app">
                {/* <FCCHeader /> */}
                {/* <Greet /> */}
                {/* <FCCMainContent /> */}
                {/* <FCCContactApp /> */}
                {/* <FCCJokeApp /> */}
                {/* <FCCStoreApp /> */}
                {/* <FCCFooter /> */}
                {/* <FCCClassBasedApp /> */}
                {/* <FCCTodoApp /> */}
                {/* <FCCCounterApp /> */}
                <FCCConditionalRenderingApp />
            </div>
        )
    }
}
