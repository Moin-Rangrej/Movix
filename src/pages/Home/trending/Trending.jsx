import React from 'react'
import ContentWrapper from '../../../components/conentWrapper/Contentwrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'

const Trending = () => {
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <div className='cerouselTitle'>Trending</div>
            <SwitchTabs />
        </ContentWrapper>
    </div>
  )
}

export default Trending