import React from "react";
import { useParams } from "react-router-dom";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import data from "../../data/data.json";

const Company: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        {data.companies[Number(id)].name}
      </Typography>
      <Typography variant="h6" component="h3" gutterBottom>
        Employees:
      </Typography>
      <List>
        {data.companies[Number(id)].employees.map((employee) => (
          <ListItem key={employee.id}>
            <ListItemText primary={`${employee.name} - ${employee.position}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Company;
