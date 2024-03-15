import './App.css';
import HomePage from './components/pages/HomePage';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Helper from './components/Helper';
import CoinDetail from './components/pages/CoinDetail';
import Test from './components/Test';


function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className='bg-blue-500 my-4 p-3 rounded-sm font-bold text-xl'>
        <h1>Crypto App</h1>
      </div>

      <HomePage /> 
      {/* <Test /> */}

      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>

  )
}

export default App
