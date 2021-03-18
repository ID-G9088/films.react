import React, { Component } from "react";
import Characters from "../Characters/Characters";

export default class Films extends Component {
    state = {
        showFilms: false,
    };

    showDetails = () => {
        this.setState({ showFilms: true });
    };

    render() {
        const { film } = this.props;
        const { showFilms } = this.state;
        return (
            <li>
                <span>
                    {film.name}
                    {/* {!showFilms && <button onClick={this.showDetails}> MORE</button>} //показывает кнопку только тогда, когда нет описания еще // */}
                    {showFilms ? null : <button onClick={this.showDetails}> MORE</button>}
                    {showFilms && (
                        <>
                            <div>{film.episodeId}</div>
                            <div>{film.openingCrawl}</div>
                            <Characters characters={film.characters} />
                        </>
                    )}
                </span>
            </li>
        );
    }
}
