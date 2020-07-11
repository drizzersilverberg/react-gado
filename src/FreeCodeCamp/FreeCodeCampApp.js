import React, { Component } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Greet from './components/Greet'

export default class FreeCodeCampApp extends Component {
    render() {
        return (
            <div id="freecodecamp-app">
                <Header />
                <Greet />
                <MainContent />
                <Footer />
            </div>
        )
    }
}
