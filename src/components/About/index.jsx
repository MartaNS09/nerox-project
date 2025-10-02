import React from 'react';
import BrandArea from '../common/BrandArea';
import Breadcrumb from '../common/Breadcrumb';
import Footer from '../common/Footer';
import Header from '../common/Header';
import TestimonialFour from '../Home/Testimonial';
import AboutArea from './AboutArea';
import AboutCounter from './AboutCounter';
import CtaImages from './CtaImages';
import NeroxAwards from './NeroxAwards';

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="About NEROX" subtitle="About Us" />
      <AboutArea />
      <AboutCounter />
      <CtaImages />
      <BrandArea brand="-2" about="about-brand" />
      <TestimonialFour />
      <NeroxAwards />
      <Footer />
    </>
  );
};

export default index;