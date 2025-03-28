import React from "react";
import "./ResultSearch.css";

const ResultSearch = ({ results }) => {
    console.log(results);
    return (
        <div className="results-list">
            <img src="" alt="" />
            {results.map((result) => (
                <div key={result.id} className="result-item">
                    {result.login} {/* Utilisation de `login` au lieu de `name` */}
                </div>
            ))}
        </div>
    );
};

export default ResultSearch;
