import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout';
import Solution from '../components/solution';
import About from '../components/about';
import Products from '../components/products';
import Papers from '../components/papers';
import FAQ from '../components/faq';
import Contacts from '../components/contacts';

function HomePage() {
  return (
    <Layout title="Главная">
      <Solution />
      <About />
      <Products />
      <Papers />
      <FAQ/>
      <Contacts />
    </Layout>
  )
}

export default HomePage;
