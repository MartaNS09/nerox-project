import React from 'react';
import SEO from '../../components/seo';
import JobDetailsArea from '../../components/Job-details/JobDetailsArea';
import { jobListData } from '../../data/joblistData';

export async function getStaticPaths() {
  const paths = jobListData.map((job) => ({
    params: { url: job.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const joblistItem = jobListData.find(item => item.url === params.url);

  if (!joblistItem) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      joblistItem,
    },
  };
}

const JobDetails = ({ joblistItem }) => {
  return (
    <>
      <SEO pageTitle={joblistItem.title} />
      <JobDetailsArea item={joblistItem} />
    </>
  );
};

export default JobDetails;
