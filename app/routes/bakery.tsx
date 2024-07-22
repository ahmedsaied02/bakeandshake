import PageTemplate from '~/components/pageTemplate';
const title = 'Cafe';
const subTitles = ['Section 1', 'Section 2'];
const items = [['Item 1', 'Item 2'], ['Item 3', 'Item 4']];
const prices = [['Price 1', 'Price 2'], ['Price 3', 'Price 4']];

export default function Bakery() {
    return (
      <div className="flex flex-col  bg-primary items-center ">
        <h1 >Menu</h1>
        <PageTemplate title={title} subTitles={subTitles} items={items} prices={prices} />
      </div>
    );
  }