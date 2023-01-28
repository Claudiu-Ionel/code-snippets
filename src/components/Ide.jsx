import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

const Ide = ({ content = 'test test' }) => {
  return (
    <>
      <AceEditor
        mode="javascript"
        defaultValue=""
        theme="monokai"
        onChange={() => {}}
        value={`${content}`}
        readOnly={true}
      />
    </>
  );
};

export default Ide;
