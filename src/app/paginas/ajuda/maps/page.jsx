'use client';
import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    initMap();
  }, []); // Run only once on component mount

  const initMap = async () => {
    // Initialize and add the map
    let map;

    const position = { lat: -23.564062217559737, lng: -46.6523911546908 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
      zoom: 12,
      center: position,
      mapId: "DEMO_MAP_ID",
    });

    const marker = new AdvancedMarkerView({
      map: map,
      position: position,
      title: "Uluru",
    });
  };

  return (
    <div>
      <div id="map" style={{ height: '100vh', width: '100%' }}></div>

      {/* Add your script directly here */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src="https://maps."+c+"apis.com/maps/api/js?"+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({key: "AIzaSyB0ie1d9o1lw7_o2UnbbaRpdzMYNwLZvDM", v: "beta"});`,
        }}
      ></script>
    </div>
  );
};

export default Home;
