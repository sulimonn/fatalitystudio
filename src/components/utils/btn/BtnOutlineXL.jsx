import { Link } from 'react-router-dom';
import ArrowSvg from './Arrow';

function BtnOutlineXl({ children, link = null }) {
  if (link) {
    return (
      <Link to={link} className="btn1 btn-outline btn-outline-xl">
        <span>
          {children}
          <ArrowSvg />
        </span>
      </Link>
    );
  }
  return (
    <button className="btn1 btn-outline btn-outline-xl">
      {children}
      <ArrowSvg />
    </button>
  );
}

export default BtnOutlineXl;
