import InProgressPage from "./InProgressPage";
import TabPanel from "./TabPanel";
import DonePage from "./DonePage";
import ConfigPage from "./ConfigPage";
import ReportPage from "./ReportPage";

const Main = props => {
  return (
    <main>
      <TabPanel page={props.page} index={0}>
        <InProgressPage />
      </TabPanel>
      <TabPanel page={props.page} index={1}>
        <DonePage />
      </TabPanel>
      <TabPanel page={props.page} index={2}>
        <ReportPage />
      </TabPanel>
      <TabPanel page={props.page} index={3}>
        <ConfigPage />
      </TabPanel>
    </main>
  );
};

export default Main;
