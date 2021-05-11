import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>This is the homepage. What's gonna go here? No idea!</h1>
                <p>This website is still a work in progress.
                    The idea behind it is to act as a stat tracker for local Madden
                    games between a group. Start by inputting a game under the "Game Input"
                    tab. This will create a game in the "Games" tab and also add to the player's
                    stats or create a new player if one does not yet exist.
                </p>
            </div>
        )
    }
}

export default Home
