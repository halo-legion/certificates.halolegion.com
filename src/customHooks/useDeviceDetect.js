import React from "react";

function findUserAgent() {
  const userAgent =
    typeof window.navigator === "undefined" ? "" : navigator.userAgent;
  const mobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  return mobile;
}

export default function useDeviceDetect() {
  const [isMobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(findUserAgent());
    });
    setMobile(findUserAgent());
  }, []);

  return { isMobile };
}
