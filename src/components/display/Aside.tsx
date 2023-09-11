import { DocsInterface } from "../../types/DocsInterface";

interface DocsInterfaceProps {
  docs: DocsInterface[];
}

const Aside = ({ docs }: DocsInterfaceProps) => {
  return (
    <div className='flex flex-col p-1 w-full'>
      {docs.map((doc, index) => (
        <div key={index} className='w-full flex justify-between'>
          <p>
            {doc.libellecivilite} {doc.nomdexercice} {doc.prenomdexercice}
            {doc.libellesavoirfaire}
          </p>
          <p>
            {doc.identifiantpp} {doc.codecivilite} {doc.codecivilitedexercice}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Aside;
