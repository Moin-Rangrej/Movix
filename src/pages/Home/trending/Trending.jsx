import React, { useState } from 'react'
import ContentWrapper from '../../../components/conentWrapper/Contentwrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Crousel from '../../../components/Crousel/Crousel'

const Trending = () => {
  const [endpoint,setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${endpoint}`);
   
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <div className='cerouselTitle'>Trending</div>
            <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Crousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending