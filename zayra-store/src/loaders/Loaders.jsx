import ClipLoader from 'react-spinners/ClipLoader';
import './Loaders.css';

export function Loader(){
  return(
    <div className="loader">
      <ClipLoader />
    </div>
  )
}