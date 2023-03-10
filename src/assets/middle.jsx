import React from 'react'
import image from '../images/Frame 151.png'
import image1 from '../images/Frame 151-1.png'
import image2 from '../images/Frame 151-2.png'
import image3 from '../images/Frame 151-3.png'
import image4 from '../images/Frame 151-4.png'
import image5 from '../images/Frame 151-5.png'
import image6 from '../images/Frame 151-6.png'
import image7 from '../images/Frame 151-7.png'
import star from '../images/star.png'
const middle = () => {
  return (
    <div className='more'>
        <h1>Inspiration for your next adventure</h1>
        <div className="inspiration">
            <div className="row">
                <div className="card">
                    <img src={image} alt="" />
                    <div>
                        <p className='tr'>Desert king</p>
                        <p className='tt'>1MBT per night</p>
                    </div>
                    <div>
                        <p className='tr'>2345km away</p>
                        <p className='tr'>available for 2weeks stay</p>
                    </div>
                    <img src={star} alt="" width={92} />
                </div>
                <div className="card">
                    <img src={image1} alt="" />
                    <div>
                        <p className='tr'>Desert king</p>
                        <p className='tt'>1MBT per night</p>
                    </div>
                    <div>
                        <p className='tr'>2345km away</p>
                        <p className='tr'>available for 2weeks stay</p>
                    </div>
                    <img src={star} alt="" width={92} />
                </div>
                <div className="card">
                    <img src={image2} alt="" />
                    <div>
                        <p className='tr'>Desert king</p>
                        <p className='tt'>1MBT per night</p>
                    </div>
                    <div>
                        <p className='tr'>2345km away</p>
                        <p className='tr'>available for 2weeks stay</p>
                    </div>
                    <img src={star} alt="" width={92} />
                </div>
                <div className="card">
                    <img src={image3} alt="" />
                    <div>
                        <p className='tr'>Desert king</p>
                        <p className='tt'>1MBT per night</p>
                    </div>
                    <div>
                        <p className='tr'>2345km away</p>
                        <p className='tr'>available for 2weeks stay</p>
                    </div>
                    <img src={star} alt="" width={92} />
                </div>
            </div>
            <div className="row">
                <div className="card">
                    <img src={image4} alt="" />
                    <div>
                        <p className='tr'>Desert king</p>
                        <p className='tt'>1MBT per night</p>
                    </div>
                    <div>
                        <p className='tr'>2345km away</p>
                        <p className='tr'>available for 2weeks stay</p>
                    </div>
                    <img src={star} alt="" width={92} />
                </div>
                <div className="card">
                    <img src={image5} alt="" />
                    <div>
                        <p className='tr'>Desert king</p>
                        <p className='tt'>1MBT per night</p>
                    </div>
                    <div>
                        <p className='tr'>2345km away</p>
                        <p className='tr'>available for 2weeks stay</p>
                    </div>
                    <img src={star} alt="" width={92} />
                </div>
                <div className="card">
                    <img src={image6} alt="" />
                    <div>
                        <p className='tr'>Desert king</p>
                        <p className='tt'>1MBT per night</p>
                    </div>
                    <div>
                        <p className='tr'>2345km away</p>
                        <p className='tr'>available for 2weeks stay</p>
                    </div>
                    <img src={star} alt="" width={92} />
                </div>
                <div className="card">
                    <img src={image7} alt="" />
                    <div>
                        <p className='tr'>Desert king</p>
                        <p className='tt'>1MBT per night</p>
                    </div>
                    <div>
                        <p className='tr'>2345km away</p>
                        <p className='tr'>available for 2weeks stay</p>
                    </div>
                    <img src={star} alt="" width={92} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default middle