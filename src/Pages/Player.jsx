import React from 'react'
import { useSelector } from 'react-redux'

function Player() {
  const { player } = useSelector(state => state.palyer)
  return (
    <div className='row'>
      {player.map(e => <>
        <div class="image col-md-6 col-lg-4  col-sm-12" style={{ marginBottom: '15px' }}><img class="image col-12" src={e.image} alt="1.jpg" /></div>
      </>)}
    </div>
  )
}

export default Player