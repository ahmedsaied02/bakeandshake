import React from "react";
import Items from "./items";

export default function SectionTemplate({
  subTitle,
  items,
  prices,
}: {
  subTitle: string;
  items: string[];
  prices: string[];
}) {
  return (
    <div className="flex flex-col items-center justify-center p-10  rounded-lg text-white">
      <h3 className="mb-4 ">{subTitle}</h3>
      <Items items={items} prices={prices} />
    </div>
  );
}
