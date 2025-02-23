import { CheckCircle, HourglassEmpty } from "@mui/icons-material";
import { Chip } from "@mui/material";

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <Chip
      label={status === "pending" ? "Pending" : "Paid"}
      icon={
        status === "pending" ? (
          <HourglassEmpty sx={{ fontSize: "16px", color: "white" }} />
        ) : (
          <CheckCircle sx={{ fontSize: "16px", color: "white" }} />
        )
      }
      variant="outlined"
      sx={{
        fontSize: "0.75rem",
        paddingX: 1,
        paddingY: 0.5,
        borderRadius: "9999px",
        color: "white", 
        borderColor: status === "pending" ? "#FFA500" : "#4CAF50", 
        backgroundColor: status === "pending" ? "#FFA500" : "#4CAF50",
        "& .MuiChip-icon": {
          color: "white", 
        },
      }}
    />
  );
}
