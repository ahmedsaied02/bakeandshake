import React from 'react';
import PageContent from './pageContent';

export default function PageTemplate({ title, subTitles, items, prices }: { title: string; subTitles: string[]; items: string[][]; prices: string[][] }) {
  return (
    <div className="flex flex-col justify-center items-center">
      
      <h2>{title}</h2>
      {subTitles.map((subtitle, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <h3>{subtitle}</h3>
          <PageContent items={items[index]} prices={prices[index]} />
        </div>
      ))}
    </div>
  );
}