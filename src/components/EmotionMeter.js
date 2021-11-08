let emotion = "HAPPY";

function EmotionMeter() {
    if (emotion === "HAPPY") {
        return <i className="fas fa-smile-beam"></i>;
      } else if(emotion === "SAD") {
        return <i className="far fa-frown-open"></i>;
      }
}

export default EmotionMeter;
