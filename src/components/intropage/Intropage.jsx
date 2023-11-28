import Advantages from './advantages/Advantages';
import Intro from './intro/Intro';
import OurTeam from './ourteam/OurTeam';
import Partners from './partners/Partners';
import Portfolio from './portfolio/Porfolio';
import Services from './services/Services';

function IntroPage() {
  return (
    <section>
      <Intro></Intro>
      <Services />
      <Portfolio />
      <Advantages />
      <OurTeam />
      <Partners />
    </section>
  );
}

export default IntroPage;
