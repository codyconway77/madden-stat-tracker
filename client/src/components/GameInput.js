import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../assets/GameInput.css';
import axios from 'axios';
import { FormControl, InputLabel, Input, Grid, Container, TextField } from '@material-ui/core';

export class GameInput extends Component {
    constructor() {
        super()
        this.state = {
            player: null,
            win: 0,
            loss: 0,
            score: null,
            yards: null,
            rushingYards: null,
            passingYards: null,
            interceptions: null,
            forcedFumbles: null,
            player2: null,
            win2: 0,
            loss2: 0,
            score2: null,
            yards2: null,
            rushingYards2: null,
            passingYards2: null,
            interceptions2: null,
            forcedFumbles2: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })    
    }

    handleSubmit = () => {
        axios.post('http://localhost:3000/games', {
            player: this.state.player,
            win: this.state.win,
            loss: this.state.loss,
            score: this.state.score,
            yards: this.state.yards,
            rushingYards: this.state.rushingYards,
            passingYards: this.state.passingYards,
            interceptions: this.state.interceptions,
            forcedFumbles: this.state.forcedFumbles,
            player2: this.state.player2,
            win2: this.state.win2,
            loss2: this.state.loss2,
            score2: this.state.score2,
            yards2: this.state.yards2,
            rushingYards2: this.state.rushingYards2,
            passingYards2: this.state.passingYards2,
            interceptions2: this.state.interceptions2,
            forcedFumbles2: this.state.forcedFumbles2
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
        axios.put('http://localhost:3000/players', {
            name: this.state.player,
            win: this.state.win,
            loss: this.state.loss,
            score: this.state.score,
            totalYards: this.state.yards,
            totalRushingYards: this.state.rushingYards,
            totalPassingYards: this.state.passingYards,
            totalInterceptions: this.state.interceptions,
            totalForcedFumbles: this.state.forcedFumbles,
            name2: this.state.player2,
            win2: this.state.win2,
            loss2: this.state.loss2,
            score2: this.state.score2,
            totalYards2: this.state.yards2,
            totalRushingYards2: this.state.rushingYards2,
            totalPassingYards2: this.state.passingYards2,
            totalInterceptions2: this.state.interceptions2,
            totalForcedFumbles2: this.state.forcedFumbles2
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <Container maxWidth="md">
                <Grid container
                direction="row"
                alignItems="center"
                alignContent="center"
                justify="center"
                spacing={1}>
                    <Grid container justify="center" container alignItems="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            label="Player"
                            color="primary"
                            name="player" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" container alignContent="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="string"
                            label="Player 2"
                            color="secondary"
                            name="player2" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="number"
                            defaultValue={0}
                            helperText="Input 1 if this player won"
                            label="Win"
                            name="win" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="number"
                            defaultValue={0}
                            helperText="Input 1 if this player won"
                            label="Player 2 Win"
                            name="win2" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="number"
                            defaultValue={0}
                            helperText="Input 1 if this player lost"
                            label="Loss"
                            name="loss" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="number"
                            defaultValue={0}
                            helperText="Input 1 if this player lost"
                            label="Player 2 Loss"
                            name="loss2" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="number"
                            label="Score"
                            name="score" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="number"
                            label="Player 2 Score"
                            color="secondary"
                            name="score2" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="number"
                            label="Yards"
                            name="yards" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="number"
                            label="Player 2 Yards"
                            color="secondary"
                            name="yards2" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="number"
                            label="Rushing Yards"
                            name="rushingYards" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="number"
                            label="Player 2 Rushing Yards"
                            name="rushingYards2" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="number"
                            label="Passing Yards"
                            name="passingYards" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="number"
                            label="Player 2 Passing Yards"
                            name="passingYards2" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="number"
                            label="Interceptions"
                            name="interceptions" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="number"
                            label="Player 2 Interceptions"
                            name="interceptions2" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="number"
                            label="Forced Fumbles"
                            name="forcedFumbles" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" item xs={6}>
                        <FormControl required>
                            <TextField
                            onChange={this.handleChange}
                            variant="outlined"
                            type="number"
                            label="Player 2 Forced Fumbles"
                            name="forcedFumbles2" />
                        </FormControl>
                    </Grid>
                    <Grid container justify="center" alignItems="center" alignContent="center" item xs={12}>
                        
                            <Button 
                                size="large"
                                variant="contained"
                                color="primary"
                                onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        
                    </Grid>    
                </Grid>
            </Container>
        )
    }
}

export default GameInput
