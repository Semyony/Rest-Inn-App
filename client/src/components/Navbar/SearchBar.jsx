import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export default function SearchBar() {
  return (
      <Input
        placeholder="Search"
        sx={{pb:0.25, ml: 3, mt: 0.25, width: "35ch", height: "20ph" } }
        color="secondary"
      />
  );
}
