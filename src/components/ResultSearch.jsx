import React, { useState, useEffect } from "react";
import "./ResultSearch.css";

const ResultSearch = ({ results }) => {
    const [selectUser, setSelectUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (selectUser) {
            console.log("Utilisateur sélectionné :", selectUser); // 🔍 Vérifie l'utilisateur sélectionné

            const fetchUserData = async () => {
                setLoading(true);
                try {
                    const response = await fetch(`https://api.github.com/users/${selectUser.login}`);
                    const data = await response.json();
                    setUserData(data);
                    console.log("Données utilisateur récupérées :", data); // 🔍 Vérifie les données reçues
                } catch (error) {
                    console.error("Erreur lors de la récupération des données :", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchUserData();
        }
    }, [selectUser]);

    return (
        <div className="results-list">
            {results.map((result) => (
                <div key={result.id}
                    className="result-item"
                    onClick={() => setSelectUser(result)}>
                    {result.login}
                </div>
            ))}

            {selectUser && (
                <div className="modal-overlay" onClick={() => setSelectUser(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        {loading ? (
                            <p>Chargement...</p>
                        ) : userData ? (
                            <>
                                <h2>{userData.login}</h2>
                                <img src={userData.avatar_url} alt={userData.login} width="100" />
                                <p><strong>Nom :</strong> {userData.name || "Non renseigné"}</p>
                                <p><strong>Bio :</strong> {userData.bio || "Non renseignée"}</p>
                                <p><strong>Location :</strong> {userData.location || "Non renseignée"}</p>
                                <p><strong>Repos publics :</strong> {userData.public_repos}</p>
                                <p><strong>Followers :</strong> {userData.followers}</p>
                                <p><strong>Following :</strong> {userData.following}</p>
                                <p><a href={userData.html_url} target="_blank" rel="noopener noreferrer">Voir le profil GitHub</a></p>
                            </>
                        ) : (
                            <p>Impossible de charger les données.</p>
                        )}
                        <button onClick={() => setSelectUser(null)}>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResultSearch;