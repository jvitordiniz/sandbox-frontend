import React from 'react'
import Tasks from '../../components/organisms/Lista'
import { QueryClient, QueryClientProvider } from 'react-query'
import CustomButton from '../../components/atoms/Button';

const queryClient = new QueryClient();


export default function Listagem(){
  return(
    <>
    <QueryClientProvider client={queryClient}>
    <Tasks />
    </QueryClientProvider>
    <CustomButton />
    </>
  )    
}