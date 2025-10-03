import React from 'react';
import { useRouter } from 'next/router';
import { jobListData } from '../../data/joblistData';

const JobDetails = () => {
  const router = useRouter();
  const { url } = router.query;

  const joblistItem = jobListData.find(item => item.url === url);

  if (!joblistItem) {
    return <div>Вакансия не найдена</div>;
  }

  return (
    <div className="container">
      <h1>{joblistItem.title}</h1>
      <p>{joblistItem.subtitle}</p>
      <p>Зарплата: {joblistItem.salary}</p>
      <button onClick={() => router.back()}>Назад к вакансиям</button>
    </div>
  );
};

export default JobDetails;
