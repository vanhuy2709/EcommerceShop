import { Box, useTheme } from "@mui/material";
import { tokens } from '../../theme';
import { useNavigate } from "react-router-dom";
import { KeyboardArrowRightOutlined } from '@mui/icons-material';

const StatBox = ({ title, subtitle, icon, navigateToPage }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      m="0 30px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        alignItems="center"
        gap="18px"
      >
        {/* Icon */}
        <Box backgroundColor={colors.blueAccent[800]} padding="10px" borderRadius="50%">
          {icon}
        </Box>

        <Box>
          <p className="font-[Poppins] font-medium leading-6">{subtitle}</p>
          <h1 className="font-[Poppins] font-bold text-2xl">{title}</h1>
        </Box>
      </Box>

      <div
        className="cursor-pointer"
        onClick={() => navigate(`/admin/${navigateToPage}`)}
      >
        <KeyboardArrowRightOutlined
        />
      </div>
    </Box>
  );
};

export default StatBox;