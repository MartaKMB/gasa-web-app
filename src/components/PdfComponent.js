import { useSelector } from 'react-redux';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import { selectFileByName, fetchFile } from '../store/fileSlice';
import store from '../store/store';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

store.dispatch(fetchFile());

const PdfComponent = (pdfName) => {
  const choosenFile = useSelector((state) =>
    selectFileByName(state, pdfName.pdfName)
  );

  const choosenFilePath =
    choosenFile && choosenFile.filePath && choosenFile.filePath;

  return (
    <section className='gasa-app-pdf-viewer'>
      <a href={choosenFilePath} className='gasa-app-pdf-viewer__download-link'>
        Otwórz i pobierz PDF z kartką praktyki
      </a>
      <Document file={choosenFilePath}>
        <Page pageNumber={1} width={335} />
      </Document>
    </section>
  );
};

export default PdfComponent;
