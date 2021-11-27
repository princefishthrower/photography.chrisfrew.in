import * as React from 'react';
import { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Nav } from './Nav';

export function Layout (props: PropsWithChildren<{}>) {
    const { children } = props;
  return (
    <>
      <Nav/>
      {children}
      <Footer/>
    </>
  );
}
