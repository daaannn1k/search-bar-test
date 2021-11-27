import React from "react";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";

const AlertMessage = () => {
  const alert = useSelector((state) => state.alert.visible);

  return alert && <Alert severity="error">Please, select something!</Alert>;
};

export default AlertMessage;
