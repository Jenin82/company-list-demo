import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  Pagination,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import data from "../../data/data.json";

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.companies.length / itemsPerPage);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const displayedCompanies = data.companies.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div>
      <List>
        {displayedCompanies.map((company) => (
          <ListItem
            component={Link}
            to={`/company/${company.id}`}
            key={company.id}
            style={{ textDecoration: "none" }}
          >
            <Card style={{ width: "100%" }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {company.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {company.employees.length} employees
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
      <Box mt={4} display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </div>
  );
};

export default Home;
