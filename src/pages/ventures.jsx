import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import PageHero from '../components/layouts/PageHero';
import VentureLayout from '../components/layouts/ventures/VentureLayout';
import ventureData from '../constants/active_inactive';
import VenturesContainer from '../components/layouts/ventures/PhotosContainer';
import CallToAction from '../components/layouts/CallToAction';
import FadeInSection from '../components/generic/FadeInSection';

// const Border = styled.div`
//   height: 3px;
//   width: 85%;
//   background-color: #f2f2f2;
//   margin: auto;
// `;

const VenturesPage = () => (
  <PageLayout title="Ventures -- UCLA Sigma Eta Pi" location="ventures">
    <PageHero
      miniTitle="companies we've started"
      title="Ventures"
      subtitle="Companies and projects that SEP-ers have started"
      blurb="We couldn’t be any more proud of our brothers and sisters– friends and mentors who’ve spent an incredible amount of effort and time dedicated to building the dreams and ideas you see below"
      heroImg="group"
    />
    <VenturesContainer
      title="Featured"
      subtitle="New ventures by our current actives!"
    >
      {ventureData.FEATURED.map(featured => (
        <FadeInSection>
          <VentureLayout
            name={`${featured.firstname} ${featured.lastname}`}
            title={featured.title}
            key={`${featured.firstname} ${featured.lastname}`}
            desc={featured.desc}
            notPictured={featured.notPictured}
          />
        </FadeInSection>
      ))}
    </VenturesContainer>

    <VenturesContainer
      title="Active"
      subtitle="Companies and projects created by current actives or alumni that are still thriving today."
    >
      {ventureData.ACTIVE.map(active => (
        <FadeInSection>
          <VentureLayout
            name={`${active.firstname} ${active.lastname}`}
            title={active.title}
            key={`${active.firstname} ${active.lastname}`}
            desc={active.desc}
            notPictured={active.notPictured}
          />
        </FadeInSection>
      ))}
    </VenturesContainer>

    <VenturesContainer
      title="Inactive/Closed"
      subtitle="Companies and projects that helped us grow and learn along the way"
    >
      {ventureData.INACTIVE.map(inactive => (
        <FadeInSection>
          <VentureLayout
            name={`${inactive.firstname} ${inactive.lastname}`}
            title={inactive.title}
            key={`${inactive.firstname} ${inactive.lastname}`}
            desc={inactive.desc}
            notPictured={inactive.notPictured}
          />
        </FadeInSection>
      ))}
    </VenturesContainer>
    <CallToAction
      title="Many of us have also worked at some of the most innovative startups in the world"
      buttonTitle="Careers"
      link="careers"
    />
  </PageLayout>
);

export default VenturesPage;
