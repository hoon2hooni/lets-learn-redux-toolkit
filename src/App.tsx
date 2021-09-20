import React from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { increamented, amountAdded } from './features/counter/counter-slice';
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';
import logo from './logo.svg';
import './App.css';

function App() {
  const count = useAppSelector(({ counter: { value } }) => value);
  const dispatch = useAppDispatch();
  const { data = [], isFetching } = useFetchBreedsQuery();
  function handleClick() {
    dispatch(increamented());
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => dispatch(amountAdded(3))}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <div>
          <p> number of dogs fetched: {data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td style={{ color: 'white' }}>{breed.name}</td>
                  <td>
                    <img
                      src={breed.image.url}
                      alt={breed.name}
                      style={{ width: 300, height: 300, objectFit: 'cover' }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'>
            Learn React
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'>
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
