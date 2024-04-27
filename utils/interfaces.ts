
import { MongoClient } from "mongodb";

interface Skill {
    _id: string,
	name: string;
	description: string;
    difficulty: number;
}

interface User {
    _id: string,
    firstName:string,
    lastName:string,
    skills: UserSkill[],
    birthday:Date,
    level:number,
    experience:number,
    username:string,
    password:string
}

interface Log {
    start: Date,
    end: Date
}

interface UserSkill {
    skillRef: Skill | string,
    tracking: boolean,
    level: number,
    log: Log[]
}

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

export type {Skill, User, UserSkill};