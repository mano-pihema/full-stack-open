interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

export interface CoursePartBasic extends CourseDescription {
  //description: string;
  kind: "basic"
}

 export interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

export interface CoursePartBackground extends CourseDescription {
  //description: string;
  backgroundMaterial: string;
  kind: "background"
}

interface CourseDescription extends CoursePartBase{
  description:string,

}
export interface CourseSpecial extends CourseDescription{
  requirements:string[],
  kind:"special"
}

export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CourseSpecial;

export interface contentProp {
  courses:CoursePart[]
}

export interface partsProp {
  data:CoursePart
}