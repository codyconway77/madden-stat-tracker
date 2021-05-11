import React, { Component } from 'react'
import '../assets/App.css';

export class Games extends Component {
    render() {
        return (
            <div className="games-container">
                {this.props.games.map((game, i) => (
                    <ul className="game-card" key={i}>
                        <div className="game-player-column">
                            <li className="list-group-item">Player: {game.player}</li>
                            <li className="list-group-item">Result: {(game.win === 1) ? 'Win' : 'Loss'}</li>  
                            <li className="list-group-item">Score: {game.score}</li>
                            <li className="list-group-item">Yards: {game.yards}</li>
                            <li className="list-group-item">Rushing Yards: {game.rushingYards}</li>
                            <li className="list-group-item">Passing Yards: {game.passingYards}</li>
                            <li className="list-group-item">Interceptions: {game.interceptions}</li>
                            <li className="list-group-item">Forced Fumbles: {game.forcedFumbles}</li>
                        </div>
                        <div className="game-player-column">
                            <li className="list-group-item">Player2: {game.player2}</li>
                            <li className="list-group-item">Result: {(game.win2 === 1) ? 'Win' : 'Loss'}</li>  
                            <li className="list-group-item">Score: {game.score2}</li>
                            <li className="list-group-item">Yards: {game.yards2}</li>
                            <li className="list-group-item">Rushing Yards: {game.rushingYards2}</li>
                            <li className="list-group-item">Passing Yards: {game.passingYards2}</li>
                            <li className="list-group-item">Interceptions: {game.interceptions2}</li>
                            <li className="list-group-item">Forced Fumbles: {game.forcedFumbles2}</li>
                        </div>
                     </ul>
                ))}
            </div> 
        )
    }
}

export default Games
