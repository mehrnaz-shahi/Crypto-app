import './App.css';
import HomePage from './components/pages/HomePage';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className='bg-blue-500 my-4'>
        <h1>Crypto App</h1>
      </div>
      <HomePage />
      <ReactQueryDevtools />
    </QueryClientProvider>

  )
}

export default App
