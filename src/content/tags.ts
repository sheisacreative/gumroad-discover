import { v4 as uuidv4 } from "uuid";

type TagProps = {
  id: string;
  name: string;
};

export const tags: TagProps[] = [
  { id: uuidv4(), name: "3D" },
  { id: uuidv4(), name: "Business & Money" },
  { id: uuidv4(), name: "Comics & Graphic Novels" },
  { id: uuidv4(), name: "Design" },
  { id: uuidv4(), name: "Drawing & Painting" },
  { id: uuidv4(), name: "Education" },
  { id: uuidv4(), name: "Fiction Books" },
  { id: uuidv4(), name: "Films" },
];
