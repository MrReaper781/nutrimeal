import { useState } from "react";
import dietData from "../charts.json";
import styled from "styled-components";

const DietPlan = ({ bmiCategory }) => {
  const [dietType, setDietType] = useState("vegan");

  const handleDietChange = (diet) => {
    setDietType(diet);
  };

  const dietPlans = dietData[dietType]?.[bmiCategory] ?? [];

  return (
    <Container>
      <Title>Diet Plan</Title>
      <ButtonGroup>
        <DietButton
          onClick={() => handleDietChange("vegan")}
          active={dietType === "vegan"}
        >
          Vegan Diet
        </DietButton>
        <DietButton
          onClick={() => handleDietChange("nonVegan")}
          active={dietType === "nonVegan"}
        >
          Non-Vegan Diet
        </DietButton>
      </ButtonGroup>
      {Array.isArray(dietPlans) && dietPlans.length > 0 ? (
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Day</TableHeader>
              <TableHeader>Breakfast</TableHeader>
              <TableHeader>Mid Meal</TableHeader>
              <TableHeader>Lunch</TableHeader>
              <TableHeader>Evening</TableHeader>
              <TableHeader>Dinner</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {dietPlans.map((plan, index) => (
              <TableRow key={index}>
                <TableCell>{plan.day}</TableCell>
                <TableCell>{plan.breakfast}</TableCell>
                <TableCell>{plan.midMeal}</TableCell>
                <TableCell>{plan.lunch}</TableCell>
                <TableCell>{plan.evening}</TableCell>
                <TableCell>{plan.dinner}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      ) : (
        <NoDataMessage>
          No data available for the selected diet type and BMI category.
        </NoDataMessage>
      )}
    </Container>
  );
};

export default DietPlan;

// Styled Components
const Container = styled.div`
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const DietButton = styled.button`
  background-color: ${(props) => (props.active ? "#3498db" : "#ecf0f1")};
  color: ${(props) => (props.active ? "white" : "#2c3e50")};
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#2980b9" : "#d5d8dc")};
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

const TableHeader = styled.th`
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
  background-color: #3498db;
  color: white;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 12px;
  font-size: 14px;
  color: #34495e;
  border-bottom: 1px solid #ddd;
`;

const NoDataMessage = styled.p`
  text-align: center;
  font-size: 16px;
  color: #7f8c8d;
  margin-top: 20px;
`;
