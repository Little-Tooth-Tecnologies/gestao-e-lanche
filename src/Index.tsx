import { useEffect, useState } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import { CircularProgress } from '@mui/material';

function Index() {  

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(true);
    }, 2500)

    return () => { 
      clearTimeout(timeout);
    }  
    
  }, []);

  useEffect(() => {
    if(!isLoading) {
      navigate('/login')
    }
  }, [isLoading, navigate]);

  return (
    <>
    {isLoading ? ( 
      <article className='bg-fundos-escuro text-texto-white w-36'>
        <div className='m-5 pt-4 flex-col text-center'>
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

};

export default Index
