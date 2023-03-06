import { Grid } from "@mui/material";
import DashboardCard from "components/DashboardCard";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <DashboardCard title="Dashboard">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          ---
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default Dashboard;
