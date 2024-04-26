function make_car(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
): Object {
  let car = { manufacturer, model } as { [key: string]: any };
  options.forEach(([key, value]) => (car[key] = value));
  return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(
  make_car("Urus", "lamborghini", ["color", "yellow"], ["sunroof", true])
);
