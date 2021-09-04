
const TabPanel = ({ page, index, children }) => {
  return (
    <div hidden={page !== index}>
      {
        page === index
          ? children
          : null
      }
    </div>
  )
};

export default TabPanel;