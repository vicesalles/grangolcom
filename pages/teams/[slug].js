import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function GreetingComponent() {
  const { locale,slug } = useRouter();  // Obtenim el locale des del router
  const {data, error} = useSWR(`/api/teams?slug=${slug}&locale=${locale}`, fetcher)

  if (!data) 
    return <div>Carregant....</div> 

  {console.log(data)}
  return <p>{data.name}</p>;
}


