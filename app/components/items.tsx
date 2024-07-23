export default function Items({
  items,
  prices,
}: {
  items: string[];
  prices: string[];
}) {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-[100%]">
  {/* Left Column for Items */}
  <div className="flex flex-col space-y-2">
    {items.map((item, index) => (
      <p
        key={index}
        className="whitespace-nowrap inline-block w-full text-secondary"
      >
        {item}
      </p>
    ))}
  </div>

  {/* Right Column for Prices */}
  <div className="flex flex-col space-y-2">
    {prices.map((price, index) => (
      <div
        key={index}
        className="flex items-center justify-center"
      >
        {price}
      </div>
    ))}
  </div>
</div>



    </>
  );
}
