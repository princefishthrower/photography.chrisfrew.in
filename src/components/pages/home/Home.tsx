import * as React from 'react';
import { BannerImage } from './components/BannerImage/BannerImage';
import { PhotoMasonry } from './components/PhotoMasonry';

interface IHomeProps {
  data: any;
}

export function Home (props: IHomeProps) {
  const { data } = props;
  return (
    <>
      <BannerImage/>
      <div className='text-center fst-italic text-light'>Explore the collection:</div>
      <PhotoMasonry data={data}/>
    </>
  );
}
