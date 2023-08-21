import React from 'react';
import { useState } from 'react';

function Content() {

  const listings = [
    {
      name: 'eBook',
      url: 'images/home1.jpg',
      price: 100,
      summary: 'summary 1',
    },
    {
      name: 'Music',
      url: 'images/home2.jpg',
      price: 200,
      summary: 'summary 2',
    },
    {
      name: 'Video',
      url: 'images/home3.jpg',
      price: 300,
      summary: 'summary 3',
    }
  ];


  

return (
    <div className='container'>
      <div className='row'>
        {listings.map((listing, index) => (
          <div
            key={index}
            className='col-md-4 col-sm-6'
            style={{
              marginBottom: '20px',
            }}
          >
            <div className='card' style={{ cursor: 'pointer' }}>
              <img
                style={{ height: '200px', objectFit: 'cover', borderTop: '10px solid white' }}
                src="Images/janko-ferlic-sfL_QOnmy00-unsplash.jpg"
                alt={listing.name}
                className='card-img-top' // Add this class for Bootstrap styling
              />
              <div className='card-body'>
                <h5 className='card-title'>{listing.name}</h5>
                <p className='card-text'>{listing.summary}</p>
                <a href='' className='btn btn-primary'>
                ADD To Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Content;









