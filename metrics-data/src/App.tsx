// Components
import ErrorAlert from './components/error-alert';
import Shell from './components/shell';

// Providers
import APIErrorProvider from './providers/APIErrorProvider';


function App() {
  return (
    <APIErrorProvider>
      <Shell />
      <ErrorAlert />
    </APIErrorProvider>
  );
}

export default App;
