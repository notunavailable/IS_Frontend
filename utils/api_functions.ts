import type { Skill } from './interfaces';
import { SKILL_GET, SKILL_POST, USER_REGISTER, USER_GET, USER_SKILL_ADD, USER_SKILL_TRACK } from './api_calls';


export async function getSkills(): Promise<Skill[]> {
    try {
        const res = await fetch(SKILL_GET());
        const skills: Skill[] = await res.json();
        return skills;
    } catch (error) {
        console.error(error);
    }
}

export async function getUser(id:string) {
    try {
        const res = await fetch(USER_GET(id));
        const user = await res.json();
        return user;
    } catch (error) {
        console.error(error);
    }
}

export async function trackUserSkill(userId:string, skillId:string) {
    try{
        const res = await fetch(USER_SKILL_TRACK(userId, skillId), {
            method: 'POST',
        });
        const log = await res.json();
        return log;
    } catch (error) {
        console.error(error);
    }
}

export async function postSkill(body): Promise<Skill> {
    try {
        const res = await fetch(SKILL_POST(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const skill = await res.json();
        return skill;
    } catch (error){
        console.error(error);
    }
}

export async function addUserSkill(userId, skillId, body) {
    try {
        const res = await fetch(USER_SKILL_ADD(userId, skillId), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const userSkill = await res.json();
        return userSkill;
    } catch (error){
        console.error(error);
    }
}

export async function registerUser(body) {
    try {
        const res = await fetch(USER_REGISTER(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const user = await res.json();
        return user;
    } catch (error){
        console.error(error);
    }
}