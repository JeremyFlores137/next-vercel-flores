import Head from 'next/head';
import styles from './MainLayout.module.css';
import { NavBar } from '../NavBar';
import React from 'react';
interface Props {
  children: React.ReactNode;
}
export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name='description' content='About Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
