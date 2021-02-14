// Libraries
import {
    createContext,
    ReactNode,
    useState
} from 'react';


type Error = string | null;

interface APIErrorContextProps {
    error: Error;
    addError: (message: Error) => void;
    removeError: () => void;
}

export const APIErrorContext = createContext<APIErrorContextProps>({
    error: null,
    addError: () => {},
    removeError: () => {}
});


interface ErrorProviderProps {
    children: ReactNode;
}

/**
 *  Error provider to be used to show API errors
 */
const APIErrorProvider = ({ children }: ErrorProviderProps) => {
    const [error, setError] = useState<Error>(null);

    const removeError = () => setError(null);

    const addError = (message: Error) => setError(message);

    const contextValue = {
      error,
      addError,
      removeError
    };

    return (
      <APIErrorContext.Provider value={contextValue}>
        {children}
      </APIErrorContext.Provider>
    );
}

export default APIErrorProvider;