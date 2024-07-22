export default function Items({
  items,
  prices,
}: {
  items: string[];
  prices: string[];
}) {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-20 gap-y-6 p-4">
      {/* Left Column for Items */}
      <div className="flex flex-col space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-nowrap "
          >
            {item}
          </div>
        ))}
      </div>

      {/* Right Column for Prices */}
      <div className="flex flex-col space-y-4">
        {prices.map((price, index) => (
          <div
            key={index}
            className="flex items-center justify-center "
          >
            {price}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
