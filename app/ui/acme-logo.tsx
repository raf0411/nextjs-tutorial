import { Public } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';
import { montserrat } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <Box
      className={montserrat.className}
      display="flex"
      alignItems="center"
      color="white"
    >
      <Public sx={{ fontSize: 40, transform: 'rotate(15deg)' }} />
      <Typography variant="h3" fontWeight="bold" sx={{ fontSize: 32 }}>
        Acme
      </Typography>
    </Box>
  );
}
