// pages/case-studies/index.tsx

import React from 'react';
import Link from 'next/link';
import { fetchCaseStudies } from '../../../sanity/sanityQueries';
import Image from 'next/image';
import { urlForImage } from '../../../sanity/lib/image';

const CaseStudiesPage = ({ caseStudies }: any) => {
  console.log("case: ", caseStudies);
  
  return (
    <div>
      <h1>Case Studies</h1>
      <div>
        {caseStudies.map((study: any, index: any) => (
          <div key={index}>
            <Image
              className="card__cover border-[#51515110] border-2 rounded-xl"
              src={urlForImage(study.coverImage).width(500).height(300).url()}
              height={300}
              width={500}
              alt={`FES INC. Blog Post ${study.title}`}
            />
            <h2>{study.title["en"]}</h2>
            <p>{study.shortDescription["en"]}</p>
            <Link href={`/case-studies/${study.slug.current}`}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  const caseStudies = await fetchCaseStudies(locale);
  return { props: { caseStudies } };
}

export default CaseStudiesPage;
