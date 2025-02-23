"use client";

import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

const OrderDropdown: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedOrder = searchParams.get("order") || "asc";

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams);
    params.set("order", value);
    console.log(value);

    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <FormControl variant="outlined" size="small" sx={{ width: 180 }}>
        <InputLabel id="order-label" sx={{ color: "white" }}>
          Order
        </InputLabel>
        <Select
          labelId="order-label"
          value={selectedOrder}
          onChange={handleChange}
          label="Order"
          sx={{
            backgroundColor: "#333",
            color: "white",
            borderColor: "#555",
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#555" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#777" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#999",
              color: 'white',
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#222",
                color: "white",
                "& .MuiMenuItem-root": {
                  padding: "10px",
                  "&:hover": { backgroundColor: "#444" },
                },
              },
            },
          }}
        >
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default OrderDropdown;
