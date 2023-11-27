import Intro from './intro/Intro';
import Portfolio from './portfolio/Porfolio';
import Services from './services/Services';

function IntroPage() {
  return (
    <section className="container">
      <Intro></Intro>
      <Services />
      <Portfolio />
    </section>
  );
}

export default IntroPage;
