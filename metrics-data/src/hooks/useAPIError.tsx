import { useContext } from 'react';
import { APIErrorContext } from '../providers/APIErrorProvider';

const useAPIError = () => useContext(APIErrorContext);

export default useAPIError;