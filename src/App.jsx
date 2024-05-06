import { useGetTestQuery } from './api'

function App() {

  // Uncomment for scenario: Stuck on loading: Pass Date.now() as an argument to the query so that it's different on each render
  const { isLoading, isSuccess } = useGetTestQuery(Date.now());

  // Uncomment for scenario: Not stuck on loading: Don't pass any changing arguments to the query
  // const { isLoading, isSuccess } = useGetTestQuery('hello');

  return (
    <div>
      <h1>RTK Query</h1>
      {isLoading && <strong>LOADING</strong>}
      {isSuccess && <strong>SUCCESS</strong>}
    </div>
  )
}

export default App
