import { buildSchema, Prop } from '@typegoose/typegoose';

export type TalentDocument = Talent & Document;

class Location {
  @Prop()
  address: string;

  @Prop()
  postalCode: string;

  @Prop()
  city: string;

  @Prop()
  countryCode: string;

  @Prop()
  region: string;
}

class Profile {
  @Prop()
  network: string;

  @Prop()
  username: string;

  @Prop()
  url: string;
}

class Basics {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  label!: string;

  @Prop()
  image?: string;

  @Prop({ required: true })
  email!: string;

  @Prop({ required: true })
  phone!: string;

  @Prop()
  url?: string;

  @Prop()
  summary?: string;

  @Prop({ required: true, type: Location })
  location!: Location;

  @Prop({ required: true, type: () => [Profile] })
  profiles!: Profile[];
}

class Work {
  @Prop()
  name: string;

  @Prop()
  position: string;

  @Prop()
  url: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;

  @Prop()
  summary: string;

  @Prop({ type: () => [String] })
  highlights: string[];
}

class Volunteer {
  @Prop()
  organization: string;

  @Prop()
  position: string;

  @Prop()
  url: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;

  @Prop()
  summary: string;

  @Prop({ type: () => [String] })
  highlights: string[];
}

class Education {
  @Prop()
  insititution: string;

  @Prop()
  url: string;

  @Prop()
  area: string;

  @Prop()
  studyType: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;

  @Prop()
  score: string;

  @Prop({ type: () => [String] })
  courses: string[];
}

class Award {
  @Prop()
  title: string;

  @Prop()
  date: string;

  @Prop()
  awarder: string;

  @Prop()
  summary: string;
}

class Certificate {
  @Prop()
  name: string;

  @Prop()
  date: string;

  @Prop()
  issuer: string;

  @Prop()
  url: string;
}

class Publication {
  @Prop()
  name: string;

  @Prop()
  publisher: string;

  @Prop()
  releaseDate: string;

  @Prop()
  url: string;

  @Prop()
  summary: string;
}

class Skill {
  @Prop()
  name: string;

  @Prop()
  level: string;

  @Prop({ type: () => [String] })
  keywords: string[];
}

class Language {
  @Prop()
  language: string;

  @Prop()
  fluency: string;
}

class Interest {
  @Prop()
  name: string;

  @Prop({ type: () => [String] })
  keywords: string[];
}

class Reference {
  @Prop()
  name: string;

  @Prop()
  reference: string;
}

class Project {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ type: () => [String] })
  highlights: string[];

  @Prop({ type: () => [String] })
  keywords: string[];

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;

  @Prop()
  url: string;

  @Prop({ type: () => [String] })
  roles: string[];

  @Prop()
  entity: string;

  @Prop()
  type: string;
}

export class Talent {
  @Prop({ type: Basics })
  basics: Basics;

  @Prop({ type: () => [Work] })
  work: Work[];

  @Prop({ type: () => [Volunteer] })
  volunteer: Volunteer[];

  @Prop({ type: () => [Education] })
  education: Education[];

  @Prop({ type: () => [Award] })
  awards: Award[];

  @Prop({ type: () => [Certificate] })
  certificates: Certificate[];

  @Prop({ type: () => [Publication] })
  publications: Publication[];

  @Prop({ type: () => [Skill] })
  skills: Skill[];

  @Prop({ type: () => [Language] })
  languages: Language[];

  @Prop({ type: () => [Interest] })
  interests: Interest[];

  @Prop({ type: () => [Reference] })
  references: Reference[];

  @Prop({ type: () => [Project] })
  projects: Project[];
}

export const TalentSchema = buildSchema(Talent);
