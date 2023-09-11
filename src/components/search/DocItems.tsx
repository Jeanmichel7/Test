import { IconButton } from "@mui/material";
import { DocsInterface } from "../../types/DocsInterface";

import AddIcon from "@mui/icons-material/Add";

interface DocItemProps {
  doc: DocsInterface;
  setDocs: React.Dispatch<React.SetStateAction<DocsInterface[]>>;
}

const DocItem = ({ doc, setDocs }: DocItemProps) => {
  const handleAddDoc = () => {
    setDocs((prevState) => {
      if (prevState.find((item) => item === doc)) return prevState;
      return [...prevState, doc];
    });
  };

  return (
    <div className='w-full flex'>
      <p className='w-4/12'>
        {doc.libellecivilite} {doc.nomdexercice} {doc.prenomdexercice}
      </p>
      <p className='w-3/12'>{doc.identifiantpp}</p>
      <p className='font-bold'>
        {doc.libellesavoirfaire ? doc.libellesavoirfaire : "-"}
      </p>
      <div className='ml-auto'>
        <IconButton
          onClick={handleAddDoc}
          aria-label='add'
          size='small'
          sx={{ ml: 1 }}
        >
          <AddIcon color='success' />
        </IconButton>
      </div>
    </div>
  );
};

export default DocItem;
