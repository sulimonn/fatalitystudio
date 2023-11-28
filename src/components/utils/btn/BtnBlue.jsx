import ArrowSvg from './Arrow';
import './btn.css';
function BtnBlue({ children, onClick = null, type = 'button' }) {
  return (
    <button type={type} onClick={onClick} className="btn1 btn-blue">
      {children}
      <ArrowSvg />
    </button>
  );
}

export default BtnBlue;
