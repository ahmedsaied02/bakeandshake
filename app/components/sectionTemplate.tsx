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
    <div className="flex flex-col items-center justify-center p-6  rounded-lg text-secondary bg-tertiary  mt-5 w-[80%]">
      <h3 className="mb-6 text-2xl">{subTitle}</h3>
      <Items items={items} prices={prices} />
    </div>
  );
}
