"use client"

import ModernPage from "./Modern/page";
import RetroPage from "./Retro/page";
import VintagePage from "./Vintage/page";


export default function Home() {

  // const timeOfTheYear = useVariableValue('time-machine', 'nones');
  const timeOfTheYear = ('1800');
  
  console.log(timeOfTheYear)

  if(timeOfTheYear == '1800')
    return <VintagePage />
  else if(timeOfTheYear == '1900')
    return <RetroPage />
  else if(timeOfTheYear == '2025')
    return <ModernPage />
  else
  return (

   <>Select a valid time range, cause right now the time range is pointing to : {timeOfTheYear}</>
  );
}
