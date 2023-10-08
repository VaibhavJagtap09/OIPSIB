// CustomPizzaPage.js

import React, { useState, useEffect } from 'react';
import styles from './CustomPizza.module.css'; // Import the CSS module

function CustomPizzaPage() {
  const [selectedBase, setSelectedBase] = useState('');
  const [selectedSauce, setSelectedSauce] = useState('');
  const [selectedVegetables, setSelectedVegetables] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Define the available options for base, sauce, and vegetables with prices
  const baseOptions = [
    { name: 'Thin Crust', price: 80 },
    { name: 'Hand-Tossed', price: 90 },
    { name: 'Pan', price: 100 },
    { name: 'Stuffed Crust', price: 120 },
    { name: 'Gluten-Free', price: 110 },
  ];
  const sauceOptions = [
    { name: 'Tomato', price: 0 },
    { name: 'Alfredo', price: 20 },
    { name: 'Pesto', price: 20 },
    { name: 'BBQ', price: 10 },
    { name: 'Buffalo', price: 10 },
  ];
  const vegetableOptions = [
    { name: 'Mushrooms', price: 10 },
    { name: 'Olives', price: 10 },
    { name: 'Peppers', price: 10 },
    { name: 'Onions', price: 10 },
    { name: 'Tomatoes', price: 15 },
    { name: 'Spinach', price: 15 },
  ];

  // Function to calculate the total price based on selections
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    totalPrice += baseOptions.find((option) => option.name === selectedBase)?.price || 0;
    totalPrice += sauceOptions.find((option) => option.name === selectedSauce)?.price || 0;
    totalPrice += selectedVegetables.reduce((acc, veg) => {
      const option = vegetableOptions.find((option) => option.name === veg);
      return acc + (option ? option.price : 0);
    }, 0);
    setTotalPrice(totalPrice);
  };

  // Use useEffect to recalculate total price whenever selections change
  useEffect(() => {
    calculateTotalPrice();
  }, [selectedBase, selectedSauce, selectedVegetables]);

  // Handle base selection
  const handleBaseSelection = (base) => {
    setSelectedBase(base);
  };

  // Handle sauce selection
  const handleSauceSelection = (sauce) => {
    setSelectedSauce(sauce);
  };

  // Handle vegetable selection
  const handleVegetableSelection = (vegetable) => {
    if (selectedVegetables.includes(vegetable)) {
      setSelectedVegetables(selectedVegetables.filter((item) => item !== vegetable));
    } else {
      setSelectedVegetables([...selectedVegetables, vegetable]);
    }
  };

  // Function to submit the custom pizza order
  const handleSubmit = () => {
    // Process the selected options and submit the order to your server
    console.log('Selected Base:', selectedBase);
    console.log('Selected Sauce:', selectedSauce);
    console.log('Selected Vegetables:', selectedVegetables);
    console.log('Total Price:', totalPrice);

    // Here, you can send this data to your server for order processing
  };

  return (
    <div className={styles.container}>
      {/* Render options and total price */}
      <h2>Customize Your Pizza</h2>
      <form>
        <div>
          <h3>Select Base:</h3>
          {baseOptions.map((base) => (
            <label key={base.name} className={styles.optionLabel}>
              <input
                type="radio"
                value={base.name}
                checked={selectedBase === base.name}
                onChange={() => handleBaseSelection(base.name)}
              />
              {base.name} - Rs{base.price.toFixed(2)}
            </label>
          ))}
        </div>
        <div>
          <h3>Select Sauce:</h3>
          {sauceOptions.map((sauce) => (
            <label key={sauce.name} className={styles.optionLabel}>
              <input
                type="radio"
                value={sauce.name}
                checked={selectedSauce === sauce.name}
                onChange={() => handleSauceSelection(sauce.name)}
              />
              {sauce.name} - Rs{sauce.price.toFixed(2)}
            </label>
          ))}
        </div>
        <div>
          <h3>Add Vegetables:</h3>
          {vegetableOptions.map((vegetable) => (
            <label key={vegetable.name} className={styles.optionLabel}>
              <input
                type="checkbox"
                value={vegetable.name}
                checked={selectedVegetables.includes(vegetable.name)}
                onChange={() => handleVegetableSelection(vegetable.name)}
              />
              {vegetable.name} - Rs{vegetable.price.toFixed(2)}
            </label>
          ))}
        </div>
        <div className={styles.totalPrice}>
          <h3>Total Price: Rs{totalPrice.toFixed(2)}</h3>
        </div>
        <button type="button" onClick={handleSubmit} className={styles.submitButton}>
          Place Order
        </button>
      </form>
    </div>
  );
}

export default CustomPizzaPage;
