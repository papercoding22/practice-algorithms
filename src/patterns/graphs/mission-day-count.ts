function missionDayCount(missions: number[], X: number): number {
  let dayCount = 0;

  let pt1 = 0;
  let pt2 = 1;

  while (pt1 < missions.length) {
    const currentLevel = missions[pt1];
    const nextLevel = missions[pt2];

    const diff = nextLevel - currentLevel;
    if (diff <= X) {
      pt1 = pt2 + 1;
      pt2 = pt1 + 1;
    } else {
      pt1++;
      pt2 = pt1 + 1;
    }
    dayCount++;
  }

  return dayCount;
}

export { missionDayCount };
