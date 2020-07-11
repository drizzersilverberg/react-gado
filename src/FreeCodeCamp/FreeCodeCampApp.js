import React, { Component } from 'react'
import FCCHeader from './components/FCCHeader'
import FCCMainContent from './components/FCCMainContent'
import FCCFooter from './components/FCCFooter'
import Greet from './components/Greet'
import './FreeCodeCampApp.css'

export default class FreeCodeCampApp extends Component {
    render() {
        return (
            <div id="freecodecamp-app">
                <FCCHeader />
                <Greet />
                <FCCMainContent />
                <FCCFooter />
            </div>
        )
    }
}
