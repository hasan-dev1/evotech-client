import HelpmeDecide from '@/Components/HelpmeDecide/HelpmeDecide';
import HomeBanner from '@/Components/HomeBanner/HomeBanner';
import OurOffer from '@/Components/OurOffer/OurOffer';
import OurTeam from '@/Components/OurTeam/OurTeam';
import React, { useEffect } from 'react';
import Contuct from './Contuct';
import Services from './Services';

const index = () => {
  return (
    <div className="bg-slate-900/50 text-white">
      <HomeBanner></HomeBanner>
      <HelpmeDecide></HelpmeDecide>
      <Services></Services>
      <OurOffer></OurOffer>
      <OurTeam></OurTeam>
      <Contuct></Contuct>
    </div>
  );
};

export default index;