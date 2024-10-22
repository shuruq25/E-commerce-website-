import React from "react";
import Hero from "../components/hero/hero";
import LatestCollection from "../components/Latest Collection/LatestCollection"; 
import Policy from "../components/policy/policy";
import Newsletter from "../components/newsletter/newsletter";
export default function HomePage({ theme, setTheme, productList }) {
  return (
    <div className="homepage">
      <Hero theme={theme} />
      <LatestCollection productList={productList} theme={theme} /> 
      <Policy  theme={theme} />
      <Newsletter theme={theme}/>

    </div>
  );
}



