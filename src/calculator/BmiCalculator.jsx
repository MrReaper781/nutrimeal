import { useState } from 'react';
import DietPlan from './DietPlan';
import './BmiCalculator.css'

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBMICategory] = useState('');

  const calculateBMI = (event) => {
    event.preventDefault();
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));
    determineBMICategory(bmiValue);
  };

  const determineBMICategory = (bmiValue) => {
    if (bmiValue < 18.5) {
      setBMICategory('underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBMICategory('normalWeight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBMICategory('overweight');
    } else {
      setBMICategory('obese');
    }
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBMI(null);
    setBMICategory('');
  };

  return (
    <div className='body'>
    <div className='block'>
      <h1>BMI Calculator</h1>
      <form onSubmit={calculateBMI}>
        <div className='input-group'>
          <label>
            Weight (kg):
          </label>
          <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
        </div>
        <div className='input-group'>
          <label>
            Height (cm):
          </label>
          <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
        </div>
        <button className='button' type="submit">Calculate BMI</button>
        <button className='button' type="button" onClick={resetForm} style={{ marginLeft: '10px' }}>Refresh</button>
      </form>
      {bmi && (
      <div className='results'>
        <h2>Your BMI: {bmi}</h2>
        <h3>Category: {bmiCategory}</h3>
      </div>
    )}
    </div>
    
    <DietPlan bmiCategory={bmiCategory} />
    </div>
  );
};

export default BMICalculator;
