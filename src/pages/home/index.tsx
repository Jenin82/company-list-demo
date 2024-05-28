import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import data from "../../data/data.json";

const Home: React.FC = () => {

  return (
    <div>
      <List>
        {data.companies.map((company) => (
          <ListItem
            component={Link}
            to={`/company/${company.id}`}
            key={company.id}
          >
            <ListItemText primary={company.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Home;
