import React from 'react'
import learnImg from'../images/Frame 59546.png'
const learnmore = () => {
  return (
    <div className='learn-more'>
        <div className="learn">
            <div className="learn-text">
                <h1>Metabnb NFTs</h1>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <button>Learn More</button>
            </div>
            <div className="learn-img">
                <img src={learnImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default learnmore