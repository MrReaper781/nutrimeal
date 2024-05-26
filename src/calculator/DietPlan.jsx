import { useState } from 'react';
import dietData from '../charts.json';
import styles from './DietPlan.module.css'

const DietPlan = ({ bmiCategory }) => {
  const [dietType, setDietType] = useState('vegan');

  const handleDietChange = (diet) => {
    setDietType(diet);
  };

  const dietPlans = dietData[dietType]?.[bmiCategory] ?? [];

  return (
    <div className={styles.block}>
      <h2>Diet Plan</h2>
      <div>
        <button onClick={() => handleDietChange('vegan')} className={`${styles.button2} btn btn-dark`}>Vegan Diet</button>
        <button onClick={() => handleDietChange('nonVegan')} className={`${styles.button2} btn btn-dark`}>Non-Vegan Diet</button>
      </div>
      {Array.isArray(dietPlans) && dietPlans.length > 0 ? (
        <table className={`${styles.table} container`}>
          <thead>
            <tr>
              <th className={styles.cell}>Day</th>
              <th className={styles.cell}>Breakfast</th>
              <th className={styles.cell}>Mid Meal</th>
              <th className={styles.cell}>Lunch</th>
              <th className={styles.cell}>Evening</th>
              <th className={styles.cell}>Dinner</th>
            </tr>
          </thead>
          <tbody>
            {dietPlans.map((plan, index) => (
              <tr key={index}>
                <td className={styles.cell}>{plan.day}</td>
                <td className={styles.cell}>{plan.breakfast}</td>
                <td className={styles.cell}>{plan.midMeal}</td>
                <td className={styles.cell}>{plan.lunch}</td>
                <td className={styles.cell}>{plan.evening}</td>
                <td className={styles.cell}>{plan.dinner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available for the selected diet type and BMI category.</p>
      )}
    </div>
  );
};



export default DietPlan;