import { useState } from "react";
import PropTypes from "prop-types";

function Trashtalk({ talkMalus }) {
  const [trashtalkData] = useState([
    "You're not even worth possessing.",
    "Is this the best the human world has to offer?",
    "Your skills are as weak as your spirit.",
    "I'll have more fun watching paint dry than fighting you.",
    "You're nothing but a mere mortal.",
    "I'll send you back to the afterlife in no time.",
    "You're not even worth the energy it takes to defeat you.",
    "I'm disappointed. I expected more of a challenge.",
    "Is that all you've got? Pathetic.",
    "You might as well just give up now.",
    "I'll make sure you regret challenging me.",
    "I've faced tougher opponents in my sleep.",
    "You're not even worthy of being my opponent.",
    "I'll send you back to the world of the living with your tail between your legs.",
    "You're not even worth the breath it takes to speak to you.",
    "I'll make quick work of you, and move on to more important matters.",
    "You're like a fly, buzzing around, annoying but ultimately insignificant.",
    "I can see why humans are considered weaklings in the Yokai realm.",
    "Is this the best you can do? How disappointing.",
    "I'll show you the true meaning of fear.",
    "You're like a twig in the wind, easy to break.",
    "I've seen better fighters in my nightmares.",
    "You might as well surrender now, it would save us both some time.",
    "Is that all you've got? I expected more of a challenge.",
    "Your spirit is weaker than a candle flame.",
    "I'll make sure you regret ever crossing me.",
    "You're not even worth the dirt under my nails.",
    "I'll crush you like a bug, and enjoy every moment.",
    "Your fighting style is more laughable than intimidating.",
    "You're nothing but a pawn in my game.",
    "You're no match for my power and skill.",
    "You'll be begging for mercy by the time I'm done with you.",
    "I'll make you suffer for daring to challenge me.",
    "Your attacks are as weak as your resolve.",
    "I'll send you back to the human world in shame.",
    "You're not even worth the effort it takes to defeat you.",
    "You're no match for the true strength of a Yokai.",
    "I'll break your spirit and your bones.",
    "You're just a pitiful human, unworthy of my attention.",
    "You'll never be able to defeat me, no matter how hard you try.",
  ]);
  const random = Math.floor(Math.random() * trashtalkData.length);

  return (
    <div className="bulle">
      <div className="trashtalk">
        {talkMalus.length < 1 ? trashtalkData[random] : talkMalus}
      </div>
    </div>
  );
}
Trashtalk.propTypes = {
  talkMalus: PropTypes.string.isRequired,
};

export default Trashtalk;
