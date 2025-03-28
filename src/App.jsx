import { useState } from 'react'
import './App.css'
import { githubRequest } from './utils'
import FormSearch from './components/FormSearch'
import ResultSearch from './components/ResultSearch'


function App() {
  const [results, setResults] = useState([]); // Déclaré en haut du composant
  const searchUsers = async (userName) => {
    const result = await githubRequest(`https://api.github.com/search/users?q=${userName}`);
    setResults(result.items); // Met à jour les résultats
  };

  return (
    <>
      <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="logo" />
      <h1>GitSearchGab</h1>
      <FormSearch onSubmit={searchUsers} setResults={setResults} />
      <ResultSearch results={results} />
    </>
  );
}

export default App;
