import { useState } from 'react'
import './App.css'
import { githubRequest } from './utils'
import FormSearch from './components/FormSearch'
import ResultSearch from './components/ResultSearch'


function App() {
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const searchUsers = async (userName) => {
    const result = await githubRequest(`https://api.github.com/search/users?q=${userName}`);
    setResults(result.items);
    setTotalCount(result.total_count);
  };

  return (
    <>
      <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="logo" />
      <h1>GitSearchGab</h1>
      <FormSearch onSubmit={searchUsers} totalCount={totalCount} />
      <ResultSearch results={results} />
    </>
  );
}

export default App;
