import React, { useState, useEffect } from "react";
import { Container, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { dataSet } from "../../data/data.js";
import { useDispatch } from "react-redux";
import useStyles from "./styles.js";
import { showAlert, hideAlert } from "../../redux/actions.js";
import AlertMessage from "../Alert/Alert.jsx";

const Search = () => {
  const classes = useStyles();

  const [selectedName, setSelectedName] = useState("");
  const [selectOptions, setSelectOptions] = useState([]);
  const [displayList, setDisplayList] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const theName = event.target.value;
    setSelectedName(theName);
    console.log(theName);
  };

  useEffect(() => {
    const finalSearchResult = dataSet.filter((funnyName) => {
      return funnyName.toLowerCase().includes(selectedName);
    });
    setSelectOptions(finalSearchResult);
  }, [selectedName]);

  const getLink = () => {
    if (selectedName.trim()) {
      navigate(`/search?searchName=${selectedName}`);
      setSelectedName("");
      setDisplayList(false);
    } else {
      dispatch(showAlert());
      setTimeout(() => {
        dispatch(hideAlert());
      }, 1500);
    }
  };

  const showTheList = () => {
    setDisplayList(true);
  };
  return (
    <Container className={classes.container}>
      <AlertMessage />
      <Typography className={classes.typographyName} variant="h5">
        Names:
      </Typography>
      <input
        className={classes.inputSearch}
        list="names"
        id="heroeNames"
        name="heroeNames"
        type="text"
        onChange={handleChange}
        value={selectedName}
        onClick={showTheList}
        autoComplete="off"
      />
      <Button className={classes.button} variant="contained" onClick={getLink}>
        Go to
      </Button>
      <ul
        className={classes.listofNames}
        style={{ display: displayList ? "block" : "none" }}
      >
        {selectOptions.map((item, id) => {
          return (
            <li
              className={classes.listName}
              key={id}
              onClick={() => {
                setSelectedName(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Search;
