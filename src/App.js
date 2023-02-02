import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import Header from './components/Header';
import { fetchPokemon } from './features/pokemon/pokemonSlice';

function App() {
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch]);

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='teams' element={<TeamsPage />} />
                <Route
                    path='/pokemon/:pokemonId'
                    element={<PokemonDetailPage />}
                />
            </Routes>
        </div>
    );
}

export default App;
