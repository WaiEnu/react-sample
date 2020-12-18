import React from "react";
import Card from './Card'

function Home() {
  return (
  <div className="flex flex-wrap -m-4">
    <Card
      title="Learn More"
      discription="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
      category="CATEGORY"
    >
    </Card>
    <Card
      category="CATEGORY"
      title="Ennui Snackwave Thundercats"
      discription="hoto booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
    >
    </Card>
    <Card
      title="Selvage Poke Waistcoat Godard"
      discription="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
      category="CATEGORY"
    >
    </Card>
  </div>
  );
}

export default Home;