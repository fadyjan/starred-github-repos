import logo from './logo.svg';
import './App.css';
import RepoCard from "./Components/RepoCard/RepoCard"
import WrappingRepoCards from "./Components/WrappingRepoCards/WrappingRepoCards"
function App() {
  return (
    <div className="App">
        <WrappingRepoCards></WrappingRepoCards>
    </div>
  );
}

export default App;
