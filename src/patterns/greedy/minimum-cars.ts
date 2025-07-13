function minimumCars(p: number[], s: number[]): number {
  const totalPeople = p.reduce((a, b) => a + b, 0);

  // Sort the car has the most seats first
  const cars = s.sort((a, b) => b - a);
  let carsNeeded = 0;
  let peopleLeft = totalPeople;

  for (let i = 0; i < cars.length; i++) {
    if (peopleLeft <= 0) {
      break;
    }

    const seats = cars[i];
    carsNeeded++;

    if (seats >= peopleLeft) {
      peopleLeft = 0;
    } else {
      peopleLeft -= seats;
    }
  }

  return peopleLeft > 0 ? -1 : carsNeeded;
}

export { minimumCars };
