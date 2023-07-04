import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const handleMoodChangeToHappy = () => {
    const nextMood = "happy";
    queueRerenderWithNewMoodValue(nextMood);
  };

  const handleMoodChangeToConfused = () => {
    const nextMood = "confused";
    queueRerenderWithNewMoodValue(nextMood);
  };

  const handleMoodChangeToSad = () => {
    const nextMood = "sad";
    queueRerenderWithNewMoodValue(nextMood);
  };

  const handleMoodChangeToAngry = () => {
    const nextMood = "Angry";
    queueRerenderWithNewMoodValue(nextMood);
  };

  const handleMoodChangeToHungry = () => {
    const nextMood = "Hungry";
    queueRerenderWithNewMoodValue(nextMood);
  };

  const handleMoodChangeToExcited = () => {
    const nextMood = "Excited";
    queueRerenderWithNewMoodValue(nextMood);
  };

  console.log(
    "Component is rendering with a mood value of",
    moodValueFromCurrentRender
  );

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToAngry}>😠</button>
      <button onClick={handleMoodChangeToHungry}>😋</button>
      <button onClick={handleMoodChangeToExcited}>🤩</button>
    </>
  );
}

export default MoodPickerDemo;
