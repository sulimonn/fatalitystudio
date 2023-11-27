import ArrowSvg from './Arrow';
import './btn.css';
function BtnBlue({ children }) {
  return (
    <button className="btn1 btn-blue">
      {children}
      <ArrowSvg />
    </button>
  );
}

export default BtnBlue;
