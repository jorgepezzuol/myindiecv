import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Employement from "./Employement";
import { API_URL } from "../../utils/utils";
import Snackbar from "../../components/utils/SnackBar";
import AddExperience from "../../components/cv/AddExperience";

const EmploymentHistory = ({
  employmentList,
  setEmploymentList,
  setIsUpdating,
}) => {
  const [hasDeleted, sethasDeleted] = useState(false);

  const handleDelete = async (employmentId) => {
    await fetch(`${API_URL}/employment/${employmentId}`, {
      method: "DELETE",
      credentials: "include",
    });
    setEmploymentList(
      employmentList.filter((employment) => employment._id !== employmentId)
    );
    sethasDeleted(true);
  };

  return (
    <Grid item xs={12} sm={12}>
      {hasDeleted && (
        <Snackbar setHasDeleted={sethasDeleted} message="Deleted employment" />
      )}
      <Typography variant="h5" color="textPrimary">
        Employment History
      </Typography>
      <Typography variant="subtitle2" color="textSecondary" paragraph>
        Include your last 10 years of relevant experience and dates in this
        section. List your most recent position first.
      </Typography>
      {employmentList.map((employment, index) => (
        <Employement
          handleDelete={handleDelete}
          attributes={employment}
          setIsUpdating={setIsUpdating}
          key={index}
        />
      ))}
      <Box mt={1} />
      <AddExperience
        entityName={"employment"}
        setEntityList={setEmploymentList}
        entityList={employmentList}
      />
    </Grid>
  );
};

export default EmploymentHistory;
