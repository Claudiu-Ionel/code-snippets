import state from '../state/state';

const Navbar = ({ data, setState }) => {
  return (
    <>
      {data.map((data, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setState(state[index].editorCode);
            }}
          >
            {data.title}
          </div>
        );
      })}
    </>
  );
};

export default Navbar;
