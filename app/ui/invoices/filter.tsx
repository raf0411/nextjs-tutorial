"use client";

import { MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

const FilterDropdown: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSort = searchParams.get("sortBy") || "date";

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", value); 
    console.log(value);

    router.push(`?${params.toString()}`);
  };

  return (
    <FormControl variant="outlined" size="small" sx={{ width: 180 }}>
      <InputLabel id="sort-label" sx={{ color: "white" }}>Sort by</InputLabel>
      <Select
        labelId="sort-label"
        value={selectedSort} 
        onChange={handleChange} 
        label="Sort by"
        sx={{
          backgroundColor: "#333",
          color: "white",
          borderColor: "#555",
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#555" },
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#777" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#999" },
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
        <MenuItem value="date">Date</MenuItem>
        <MenuItem value="amount">Amount</MenuItem>
        <MenuItem value="status">Status</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="email">Email</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterDropdown;