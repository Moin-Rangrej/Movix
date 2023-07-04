import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const Genres = ({data}) => {
    const {genres} = useSelector((state) => state.Moviehome)
  return (
    <div className='genres'>
        {
            data?.map((gr) => {
                if (!genres[gr]?.name) return;
                return(
                    <div key={gr} className='genre'>
                        {genres[gr]?.name}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Genres