import { IconButton } from "@mui/material";
import { DocsInterface } from "../../types/DocsInterface";

import ClearIcon from "@mui/icons-material/Clear";

interface DocsInterfaceProps {
  doc: DocsInterface;
  setDocs: React.Dispatch<React.SetStateAction<DocsInterface[]>>;
}

const DocListItem = ({ doc, setDocs }: DocsInterfaceProps) => {
  const handleDeleteDoc = () => {
    if (
      window.confirm(`Êtes-vous sûr de vouloir supprimer ${doc.nomdexercice}?`)
    )
      setDocs((prevState) => prevState.filter((item) => item !== doc));
  };

  return (
    <div className='w-full flex justify-between'>
      <p>
        {doc.libellecivilite} {doc.nomdexercice}
      </p>
      <p className='font-bold'>
        {doc.libellesavoirfaire ? doc.libellesavoirfaire : "-"}
      </p>

      <IconButton
        onClick={handleDeleteDoc}
        aria-label='delete'
        size='small'
        sx={{ ml: 1 }}
      >
        <ClearIcon color='warning' />
      </IconButton>
    </div>
  );
};

export default DocListItem;
