import { IconButton } from "@mui/material";
import { DocsInterface } from "../../types/DocsInterface";
import AddIcon from "@mui/icons-material/Add";

interface DocItemProps {
  doc: DocsInterface;
  setDocs: React.Dispatch<React.SetStateAction<DocsInterface[]>>;
}

const DocItem = ({ doc, setDocs }: DocItemProps) => {
  const handleAddDoc = () => {
    setDocs((prevState) => [...prevState, doc]);
  };

  return (
    <div className='w-full flex justify-between'>
      <p>
        {doc.libellecivilite} {doc.nomdexercice} {doc.prenomdexercice}
        {doc.libellesavoirfaire}
      </p>
      <IconButton
        onClick={handleAddDoc}
        aria-label='add'
        size='small'
        sx={{ ml: 1 }}
      >
        <AddIcon color='success' />
      </IconButton>
    </div>
  );
};

export default DocItem;
