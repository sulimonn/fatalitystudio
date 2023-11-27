import ArrowSvg from './Arrow';

function BtnOutlineXl({ children }) {
  return (
    <button className="btn1 btn-outline btn-outline-xl">
      {children}
      <ArrowSvg />
    </button>
  );
}

export default BtnOutlineXl;
