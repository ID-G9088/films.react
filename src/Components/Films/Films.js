import React, { Component, useState } from "react";
import Characters from "../Characters/Characters";

const Films = (props) => {
    const [showFilms, setShowFilms] = useState(false);
    const { film } = props;

    const showDetails = () => {
        setShowFilms(true);
    };

    return (
        <li>
            <span>
                {film.name}
                {/* {!showFilms && <button onClick={this.showDetails}> MORE</button>} //показывает кнопку только тогда, когда нет описания еще // */}
                {showFilms ? null : <button onClick={showDetails}> MORE</button>}
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
};

export default Films;
