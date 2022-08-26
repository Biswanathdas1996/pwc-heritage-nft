import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
// import * as Yup from "yup";
import { Card, Grid } from "@mui/material";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Switch from "@mui/material/Switch";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import { pink } from "@mui/material/colors";
import TransctionModal from "./TransctionModal";
import HeaderWrapper from "./BackgroundUI";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const web3 = new Web3(window.ethereum);
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const Feedback = () => {
  const [start, setStart] = useState(false);
  const [response, setResponse] = useState(null);
  const [file, setFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [checked, setChecked] = useState(false);
  const [description, setDescription] = useState(null);

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  let history = useNavigate();

  const saveData = async ({}) => {};

  const modalClose = () => {
    setStart(false);
    setResponse(null);
    history("/");
  };
  return (
    <>
      {start && <TransctionModal response={response} modalClose={modalClose} />}
      <HeaderWrapper>
        <div className="form-layer2">
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div style={{ margin: 20 }}>
                <Card
                  style={{
                    background: "#ffffff9e",
                  }}
                >
                  <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <div
                        style={{
                          padding: "20px",
                        }}
                      >
                        <h4>Feedback</h4>
                        <Formik
                          initialValues={null}
                          // validationSchema={VendorSchema}
                          onSubmit={(values, { setSubmitting }) => {
                            console.log("values=======>", values);
                            saveData(values);
                            setSubmitting(false);
                          }}
                        >
                          {({ touched, errors, isSubmitting, values }) => (
                            <Form>
                              <Grid container>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                  <Box
                                    sx={{
                                      width: 200,
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Rating
                                      name="hover-feedback"
                                      value={value}
                                      precision={0.5}
                                      getLabelText={getLabelText}
                                      onChange={(event, newValue) => {
                                        setValue(newValue);
                                      }}
                                      onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                      }}
                                      emptyIcon={
                                        <StarIcon
                                          style={{ opacity: 0.55 }}
                                          fontSize="inherit"
                                        />
                                      }
                                    />
                                    {value !== null && (
                                      <Box sx={{ ml: 2 }}>
                                        {labels[hover !== -1 ? hover : value]}
                                      </Box>
                                    )}
                                  </Box>
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                  <div
                                    className="form-group"
                                    style={{ marginLeft: 10, marginTop: 10 }}
                                  >
                                    <label for="title" className="my-2">
                                      Description{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <TextareaAutosize
                                      aria-label="minimum height"
                                      minRows={3}
                                      name="text"
                                      onChange={(e) =>
                                        setDescription(e.target.value)
                                      }
                                      placeholder="Minimum 3 rows"
                                      style={{ width: "100%" }}
                                      className={`form-control text-muted ${
                                        touched.text && errors.text
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                    />
                                  </div>
                                </Grid>

                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                  <div
                                    className="form-group"
                                    style={{
                                      marginLeft: 10,
                                      marginTop: 10,
                                      float: "right",
                                    }}
                                  >
                                    <span className="input-group-btn">
                                      <Button
                                        variant="contained"
                                        size="large"
                                        sx={{
                                          marginX: "15px",
                                          marginBottom: "15px",
                                        }}
                                        type="submit"
                                        value={"Submit"}
                                        style={{
                                          fontSize: 16,
                                          padding: "10px 24px",
                                          borderRadius: 12,
                                        }}
                                      >
                                        Submit
                                      </Button>
                                    </span>
                                  </div>
                                </Grid>
                              </Grid>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </Grid>
                  </Grid>
                </Card>
              </div>
            </Grid>
          </Grid>
        </div>
      </HeaderWrapper>
    </>
  );
};
export default Feedback;
