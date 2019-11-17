import React, {useState, useEffect} from 'react';

const animate_next_circle = (current_animated_circle) => {
  if (current_animated_circle == 3) {
    return 1;
  } else {
    return (current_animated_circle + 1);
  }
}

const render_circle = (id, is_animated) => {
  return (
    <div key={id} className={is_animated ? "loading-page-graphic-circle loading-page-graphic-circle-animation" : "loading-page-graphic-circle"}></div>
  );
}

function LoadingPageGraphic () {
  const [current_animated_circle, set_current_animated_circle] = useState(1);

  let interval = setInterval(() => {
    set_current_animated_circle(animate_next_circle(current_animated_circle));
  }, 1000);

  let circles = [];

  for (let i = 1; i <= 3; i++) {
    circles.push(render_circle(i, (i == current_animated_circle)));
  }

  useEffect(() => {
    return (() => clearInterval(interval));
  });

  return (
    <div id="loading-page-graphic">
      {circles}
    </div>
  );
}

export default LoadingPageGraphic;
