import React from "react";
import '../assets/styles.css'

export default function Median() {
    return(
        <div className='container'>
        <div className='item'>
          <div className='inner'>
            <div className='pane'>
              <h1 className='title'>Enjoy on your TV.</h1>
              <h2 className='subtitle'>
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </h2>
            </div>
            <div className='pane'>
              <img className='image' src='/images/misc/home-tv.jpg' />
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='inner1'>
            <div className='pane'>
              <h1 className='title'>
                Download your programmes to watch on the go.
              </h1>
              <h2 className='subtitle'>
                Save your data and watch all your favourites offline.
              </h2>
            </div>
            <div className='pane'>
              <img className='image' src='/images/misc/home-mobile.jpg' />
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='inner'>
            <div className='pane'>
              <h1 className='title'>Watch everywhere.</h1>
              <h2 className='subtitle'>
                Stream unlimited films and TV programmes on your phone, tablet,
                laptop and TV without paying more.
              </h2>
            </div>
            <div className='pane'>
              <img className='image' src='/images/misc/home-imac.jpg' />
            </div>
          </div>
        </div>
      </div>
    )
}