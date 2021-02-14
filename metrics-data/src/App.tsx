// Components
import ErrorAlert from './components/error-alert';
import Shell from './components/shell';

// Providers
import APIErrorProvider from './providers/APIErrorProvider';

/**
 * Application, is wrapped by the error provider
 * that will trigger a alert whenever an API error occurs
 */
function App() {
  return (
    <APIErrorProvider>
      <Shell />
      <ErrorAlert />
    </APIErrorProvider>
  );
}

export default App;
