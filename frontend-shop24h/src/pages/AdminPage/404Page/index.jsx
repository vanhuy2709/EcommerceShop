import { Box, useTheme } from "@mui/material";
import { tokens } from '../../../theme';
import Header from '../../../components/AdminPage/Header';

const Page404 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="NOT FOUND PAGE" subtitle="This page is not found" />
    </Box>
  );
};

export default Page404;