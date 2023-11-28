import Advantages from './advantages/Advantages';
import Intro from './intro/Intro';
import OurTeam from './ourteam/OurTeam';
import Portfolio from './portfolio/Porfolio';
import Services from './services/Services';

function IntroPage() {
  return (
    <section className="container">
      <Intro></Intro>
      <Services />
      <Portfolio />
      <Advantages />
      <OurTeam />
    </section>
  );
}

export default IntroPage;
