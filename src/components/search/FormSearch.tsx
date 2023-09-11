import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import { searchDocs } from "../../api/apiSearch";
import { DocsInterface } from "../../types/DocsInterface";

interface SearchProps {
  setDocsFetched: React.Dispatch<React.SetStateAction<DocsInterface[]>>;
}

const FormSearch = ({ setDocsFetched }: SearchProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorForm, setErrorForm] = useState("");
  const [form, setForm] = useState({
    query: "",
  });

  const handleChangeInput = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const filterDoublon = (docs: DocsInterface[]) => {
    const docsFiltered: DocsInterface[] = [];
    docs.map((doc) => {
      if (!docsFiltered.find((e) => e.identifiantpp === doc.identifiantpp))
        docsFiltered.push(doc);
    });
    return docsFiltered;
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.query.trim() === "") {
      setErrorForm("Le champ de recherche est requis");
      return;
    }

    setIsLoading(true);
    const resFetchData = await searchDocs(form.query, 10);
    const docsWithoutDoublon = filterDoublon(resFetchData);
    setDocsFetched(docsWithoutDoublon);
    setIsLoading(false);
  };

  return (
    <Box component='form' onSubmit={handleSubmitForm} sx={{ p: 1 }}>
      <p>schmol</p>
      <div className='flex items-center '>
        <FormControl sx={{ mb: 1, width: "100%" }}>
          <InputLabel htmlFor='outlined-adornment-name'>
            Name or RPPS
          </InputLabel>
          <OutlinedInput
            name='query'
            fullWidth
            id='outlined-adornment-query'
            label='Name/RPPS'
            type='text'
            value={form.query}
            onChange={handleChangeInput}
            autoComplete='off'
          />
        </FormControl>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          disabled={isLoading}
          sx={{ mx: 1 }}
        >
          Search
          {isLoading && <CircularProgress size={24} sx={{ ml: 1 }} />}
        </Button>
      </div>
      <FormHelperText
        error={errorForm ? true : false}
        disabled={errorForm ? false : true}
        id='outlined-weight-helper-text'
        sx={{ mb: 1, textAlign: "center" }}
      >
        {errorForm}
      </FormHelperText>
    </Box>
  );
};

export default FormSearch;
