import type { Skill } from './interfaces';
import { SKILL_GET, SKILL_POST, SKILL_TRACK } from './api_calls';


export async function getSkills(): Promise<Skill[]> {
    try {
        const res = await fetch(SKILL_GET());
        const skills: Skill[] = await res.json();
        return skills;
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

export async function trackSkill(id): Promise<Skill> {
    try {
        const res = await fetch(SKILL_TRACK(id), {
            method: 'PUT',
        });
        const skill = await res.json();
        return skill;
    } catch (error){
        console.error(error);
    }
}