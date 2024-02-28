import './App.css';
import HomePage from './components/pages/HomePage';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, Routes } from 'react-router-dom';
import Helper from './components/Helper';
import CoinDetail from './components/pages/CoinDetail';


function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className='bg-blue-500 my-4'>
        <h1>Crypto App</h1>
      </div>

      <Routes>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/' element={<Helper />}/>
        <Route path='/coin/:id' element={<CoinDetail/>}/>
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>

  )
}

export default App
