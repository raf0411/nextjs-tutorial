"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { TextField, InputAdornment } from "@mui/material";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
<TextField
  fullWidth
  variant="outlined"
  placeholder={placeholder}
  size="small"
  defaultValue={searchParams.get('query')?.toString()}
  onChange={(e) => handleSearch(e.target.value)}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <MagnifyingGlassIcon className="h-[18px] w-[18px] text-white" />
      </InputAdornment>
    ),
  }}
  sx={{
    color: 'white',
    borderRadius: '18px',
    background: '#151515',
    '& .MuiOutlinedInput-root': {
      borderRadius: '24px',
      color: 'white',
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        borderColor: '#D9D9D9', 
      },
      '&.Mui-focused fieldset': {
        borderColor: '#D9D9D9 !important', 
      },
    },
    '& .MuiOutlinedInput-input': {
      color: 'white', 
      '&::placeholder': {
        color: '#D9D9D9',
        opacity: 1,
      },
      '&:focus': {
        outline: 'none', 
        boxShadow: 'none',
      },
    },
  }}  
/>

  );
}
