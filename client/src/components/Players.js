import React, { Component } from 'react'
import '../assets/App.css';


export class Players extends Component {
    /* constructor(props) {
        super(props);
        this.state = {
            name: player.name,
            winPercentage: player.wins + player.losses,

        }
    } */

    render() {
        return (
            <div>
                <div className="player-container">
                    {this.props.players.map((player, i) => (
                        <ul className="player-card" key={i}>
                            <li className="list-group-item">Player: {player.name}</li>
                            <li className="list-group-item">Wins: {player.wins}</li>
                            <li className="list-group-item">Losses: {player.losses}</li>
                            <li className="list-group-item">Total Yards: {player.totalYards}</li>
                            <li className="list-group-item">Rushing Yards: {player.totalRushingYards}</li>
                            <li className="list-group-item">Passing Yards: {player.totalPassingYards}</li>
                            <li className="list-group-item">Total Interceptions: {player.totalInterceptions}</li>
                            <li className="list-group-item">Total Forced Fumbles: {player.totalForcedFumbles}</li>
                            <li className="list-group-item">Win %: {(player.wins / (player.wins + player.losses)) * 100}%</li>
                            <li className="list-group-item">Total YPG: {player.totalYards / (player.wins + player.losses)}</li>
                        </ul>
                    ))}
                </div>
            </div>
        )
    }
}

export default Players
