import ArrowSvg from './Arrow';
import './btn.css';

function BtnOutline({ children }) {
  return (
    <button className="btn1 btn-outline btn-outline-sm pointer-all">
      {children}
      <ArrowSvg />
    </button>
  );
}

export default BtnOutline;
