import React from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import data from "../../data/data.json";

const Company: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const company = data.companies[Number(id)];

  return (
    <Box mt={4}>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            {company.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {company.employees.length} employees
          </Typography>
        </CardContent>
      </Card>

      <Box mt={4}>
        <Typography variant="h6" component="h3" gutterBottom>
          Employees:
        </Typography>
        <List>
          {company.employees.map((employee) => (
            <ListItem key={employee.id}>
              <ListItemText
                primary={employee.name}
                secondary={employee.position}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Company;
