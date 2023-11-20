// pages/myList.tsx

import React from 'react';
import MonthOverview from '../components/MonthOverview';

const MyList = () => {
  // This data could be fetched from an API or state management store.
  const monthlyItems = {
    August: {
      items: [
        { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics', whereToBuy: 'Online Store', imageUrl: '/images/laptop.jpg', bought: true },
        // More items...
      ],
      totalBudget: 1200
    },
    September: {
      items: [
        { id: 2, name: 'Textbooks', price: 200.00, category: 'Education', whereToBuy: 'Bookstore', imageUrl: '/images/textbooks.jpg', bought: false },
        // More items...
      ],
      totalBudget: 500
    }
    // More months...
  };

  // Render each MonthOverview component by mapping over the entries in the monthlyItems object.
  const monthOverviews = Object.entries(monthlyItems).map(([month, data]) => (
    <MonthOverview key={month} month={month} items={data.items} totalBudget={data.totalBudget} />
  ));

  return (
    <div className='text-black max-w-[960px] padding-x'>
      <h1 className="text-2xl font-bold text-center my-4 text-black">My List</h1>
      {monthOverviews}
    </div>
  );
};

export default MyList;
