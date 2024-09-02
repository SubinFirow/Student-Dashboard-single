import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid2,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Item } from "../page";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StudentGrid2 = () => {
  const [students, setStudents] = useState([]);
  const [view, setView] = useState("grid");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleOpen = (student) => {
    setSelectedStudent(student);
  };

  const handleClose = () => {
    setSelectedStudent(null);
  };

  useEffect(() => {
    axios
      .get("https://freetestapi.com/api/v1/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Grid2 container spacing={2}>
      <Grid2 item size={{ xs: 12 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{ bgcolor: "#1E1E1E", textTransform: "none" }}
          onClick={() => setView(view === "grid" ? "tile" : "grid")}
        >
          Change View
        </Button>
      </Grid2>
      {view === "grid" &&
        students.map((student) => (
          <Grid2 item xs={12} md={3} key={student.id} size={{ xs: 12, md: 3 }}>
            <Item
              onClick={() => handleOpen(student)}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
                padding: 2,
              }}
            >
              <Typography variant="h4" sx={{ color: "gray" }}>
                {student?.id}
              </Typography>
              <Typography variant="subtitle1" sx={{ textAlign: "start" }}>
                {student?.name}
              </Typography>
              <Typography variant="caption" sx={{ textAlign: "start" }}>
                {student?.phone}
              </Typography>
              <Typography variant="caption" sx={{ textAlign: "start" }}>
                {student?.email}
              </Typography>
            </Item>
          </Grid2>
        ))}

      {view === "tile" &&
        students.map((student) => (
          <Grid2 item sx={{ xs: 12 }} key={student.id} size={{ xs: 12 }}>
            <Accordion
              sx={{
                border: `1px solid #1E1E1E`,
                background: "#1E1E1E",
                color: "#FAF9F6",
                "&:not(:last-child)": {
                  borderBottom: 0,
                },
                "&::before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#FAF9F6" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {student.name}
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h4" sx={{ color: "gray" }}>
                  {student?.id}
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: "start" }}>
                  {student?.name}
                </Typography>
                <Typography variant="caption" sx={{ textAlign: "start" }}>
                  {student?.phone}
                </Typography>
                <Typography variant="caption" sx={{ textAlign: "start" }}>
                  {student?.email}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid2>
        ))}

      <Dialog open={Boolean(selectedStudent)} onClose={handleClose}>
        <DialogTitle>Student Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="h4" sx={{ color: "gray" }}>
              {selectedStudent?.id}
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: "start" }}>
              {selectedStudent?.name}
            </Typography>
            <Typography variant="caption" sx={{ textAlign: "start" }}>
              {selectedStudent?.phone}
            </Typography>
            <Typography variant="caption" sx={{ textAlign: "start" }}>
              {selectedStudent?.email}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Grid2>
  );
};

export default StudentGrid2;
