// pages/case-studies/[slug].tsx

import React from 'react';

import Image from 'next/image';
import { fetchCaseStudies, fetchCaseStudyBySlug } from '../../../sanity/sanityQueries';

const CaseStudyPage = ({ caseStudy }: any) => {
  if (!caseStudy) {
    return <p>Loading...</p>;
  }else{
    console.log(caseStudy);
  }

  return (
    <div>
      <h1>{caseStudy.title["en"]}</h1> {/* Asegúrate de usar el idioma correcto */}
      {/* <Image 
        src={caseStudy.coverImage.asset.url} 
        alt="Cover Image" 
        width={500} 
        height={300} 
      /> */}
      {/* Renderiza la descripción y otros elementos aquí */}
    </div>
  );
}

export async function getStaticPaths() {
  const caseStudies = await fetchCaseStudies('en'); // Usar un idioma por defecto para generar paths
  const paths = caseStudies.map((study: any) => ({
    params: { slug: study.slug.current },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: any) {
  const caseStudy = await fetchCaseStudyBySlug(params.slug, 'en'); // Usar un idioma por defecto
  return { props: { caseStudy } };
}

export default CaseStudyPage;
