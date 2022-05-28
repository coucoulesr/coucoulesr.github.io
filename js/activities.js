function fillInActivities() {
  const activities = [
    "grilling in the backyard",
    "napping",
    "out on the golf course",
    "playing <em>Dungeons & Dragons</em>",
    "playing Nintendo Switch",
    "playing guitar",
    "reading a novel",
    "sharing a meal with friends",
    "snowboarding at Lake Tahoe",
    "watching <em>Bob's Burgers</em>",
    "working out his garage gym",
  ];

  const activity1Element = document.querySelector("#activity-1");
  const activity2Element = document.querySelector("#activity-2");

  const activity1Index = Math.floor(Math.random() * activities.length);
  let activity2Index = activity1Index;
  while (activity1Index === activity2Index) {
    activity2Index = Math.floor(Math.random() * activities.length);
  }

  activity1Element.innerHTML = activities[activity1Index];
  activity2Element.innerHTML = activities[activity2Index];
}

fillInActivities();
