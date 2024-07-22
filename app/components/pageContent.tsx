function pageContent({ items, prices }: { items: string[]; prices: string[] }) {
  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          {items.map((item) => (
            <div className="flex flex-col items-center justify-center ">
              {item}
            </div>
          ))}
        </div>
        <div>
          {prices.map((item) => (
            <div className="flex flex-col items-center justify-center">
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default pageContent;
