import React, { Component } from 'react'

/**
 * https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
 * https://reactjs.org/blog/2018/03/29/react-v-16-3.html#comopnent-lifecycle-changes
 */

export default class FCCLifecycleExemplarApp extends Component {
    constructor() {
        super()
        this.state = {}
    }

    static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props
    }

    getSnapshotBeforeUpdate() {
        // create a backup of the current way things are
    }

    componentDidMount() {
        // usualy an api calls for setting state...
    }

    // DEPRECATED
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.whatever !== this.props.whatever) {
    //         // do something important here
    //     }
    // }

    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not

        // this is usefull for performance
    }

    componentWillUnmount() {
        // teardown or cleanup your code before your component disappear
        // remove event listeners
    }

    // DEPRECATED
    // componentWillMount() {
    // }

    // DEPRECATED
    // componentWillUpdate() {
    // }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
