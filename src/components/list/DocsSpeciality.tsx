import { Chip } from "@mui/material";

interface setSpecialitySelected {
  spec: string;
  setSpecialitySelected: React.Dispatch<React.SetStateAction<string>>;
}

const DocsSpeciality = ({
  spec,
  setSpecialitySelected,
}: setSpecialitySelected) => {
  const handleClick = () => {
    setSpecialitySelected(spec);
  };

  return <Chip label={spec} variant='outlined' onClick={handleClick} />;
};

export default DocsSpeciality;
