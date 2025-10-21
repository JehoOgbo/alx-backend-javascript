import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
  const one = new ClassRoom(19);
  const two = new ClassRoom(20);
  const three = new ClassRoom(34);
  const array = [one, two, three];
  return array;
}
