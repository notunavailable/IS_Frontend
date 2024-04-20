let ORIGIN: string;

if (process.env.NODE_ENV === 'development') {
    ORIGIN = "http://localhost:8080";
}
else {
    ORIGIN = "https://api.infinitseed.com"
}

//SKILL API
export const SKILL_GET = () => `${ORIGIN}/api/skill/`;
export const SKILL_POST = () => `${ORIGIN}/api/skill/`;
export const SKILL_TRACK = (id: string) => `${ORIGIN}/api/skill/track/${id}`;

//USER API
export const USER_GET = (id: String) => `${ORIGIN}/api/user/${id}`;
export const USER_REGISTER = () => `${ORIGIN}/api/user/register`;

//SKILL -- USER API
export const START = (userId: String, skillId: String) => `${ORIGIN}/api/user/${userId}/${skillId}/start`;
export const END = (userId: String, skillId: String) => `${ORIGIN}/api/user/${userId}/${skillId}/end`;

