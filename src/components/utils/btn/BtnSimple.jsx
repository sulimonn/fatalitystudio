import { Link } from 'react-router-dom';
import ArrowSvg from './Arrow';

function BtnSimple({ children, link = null }) {
  if (link)
    return (
      <Link to={link} className="btn2 btn-simple">
        {children}
        <ArrowSvg />
      </Link>
    );
  return (
    <button className="btn2 btn-simple">
      {children}
      <ArrowSvg />
    </button>
  );
}

export default BtnSimple;
