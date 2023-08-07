import { useEffect, useState } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import { CircularProgress } from '@mui/material';

function Index() {  

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
  const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500)

    return () => { 
      clearTimeout(timeout);
    }  
    
  }, []);
 
  useEffect(() => {
    if(!isLoading) {
      navigate('/First-Access');      
    }
  }, [isLoading, navigate]);

  return (
    <>
    {isLoading ? ( 
      <article className='flex justify-center items-center content-center mt-48 select-none'>
        <div className='m-5 pt-4 flex-col transparence text-texto-white w-52 rounded text-center scale-150'>
          <h1 className='mb-4'>Carregando...</h1>
          <CircularProgress className='mb-4'/>
        </div>
      </article>
    ) : (
      <>  
        <Outlet/>
      </>
    )}
    </>
  );
}

export default Index
