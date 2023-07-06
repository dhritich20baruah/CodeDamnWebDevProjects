import Script from "next/script";
import Link from "next/link";

export default function MapLayout({ children }) {
  return (
    <html lang="en">
      {/* <Script src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"/> */}
      {/* <Link
        href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
        rel="stylesheet"
      /> */}
      <body>
        {children}
      </body>
    </html>
  );
}


