import React from 'react';

interface Item {
  id: number;
  name: string;
  price: number;
  category: string;
  whereToBuy: string;
  imageUrl: string;
  bought: boolean;
}

interface MonthOverviewProps {
  month: string;
  items: Item[];
  totalBudget: number;
}

const MonthOverview: React.FC<MonthOverviewProps> = ({ month, items, totalBudget }) => {
  // Function to format currency - can be replaced with a more robust solution like Intl.NumberFormat
  const formatCurrency = (amount: number) => {
    return `$${amount.toFixed(2)}`;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">{month}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg p-2 shadow-lg">
            <img src={item.imageUrl} alt={item.name} className="w-full h-32 object-cover rounded-t-lg" />
            <div className="p-2">
              <h3 className="text-md font-semibold truncate">{item.name}</h3>
              <p className="text-sm">{formatCurrency(item.price)}</p>
              <p className="text-sm">{item.category}</p>
              <p className="text-sm">{item.whereToBuy}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-lg">
          Total: {formatCurrency(items.reduce((acc, item) => acc + item.price, 0))} / {formatCurrency(totalBudget)}
        </p>
      </div>
    </div>
  );
};

export default MonthOverview;
