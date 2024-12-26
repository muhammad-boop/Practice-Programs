// ! Filter Function
let team = [
  {
    name: "Muhammad Raza",
    position: "Backend Developer",
  },
  {
    name: "Ali",
    position: "Frontend Developer",
  },
  {
    name: "Hussnain",
    position: "CTO",
  },
  {
    name: "Kashif",
    position: "Backend Developer",
  },
  {
    name: "Asif",
    position: "Designer",
  },
];
let Backend = team.filter((val) => val == "Backend Developer");
console.log(Backend);
