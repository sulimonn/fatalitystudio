import ArrowSvg from './Arrow';

function BtnSimple({ children }) {
  return (
    <button className="btn2 btn-simple">
      {children}
      <ArrowSvg />
    </button>
  );
}

export default BtnSimple;
