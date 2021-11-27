import * as React from 'react';
import { BannerImage } from './components/BannerImage/BannerImage';
import { PhotoMasonry } from './components/PhotoMasonry';

export function Home () {
  return (
    <>
      <BannerImage/>
      <div className='text-center fst-italic text-light'>Explore the collection:</div>
      <PhotoMasonry/>
    </>
  );
}
