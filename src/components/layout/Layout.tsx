import * as React from 'react';
import { PropsWithChildren } from 'react';
import { BannerImage } from './BannerImage/BannerImage';
import { Nav } from './Nav';

export function Layout (props: PropsWithChildren<{}>) {
    const { children } = props;
  return (
    <>
      <BannerImage/>
      <Nav/>
      {children}
    </>
  );
}
