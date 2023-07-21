let ORIGIN;

if (process.env.NODE_ENV === 'development') {
    ORIGIN = "http://localhost:5001";
}
else {
    ORIGIN = "https://api.infinitseed.com"
}

export default {ORIGIN};

//user related endpoints
export const USER_REGISTER = () => `${ORIGIN}/api/v1/user/register`;
export const USER_STATUS = ({id}) => `${ORIGIN}/api/v1/user/status/${id}`
export const USER_SKILLS = ({id}) => `${ORIGIN}/api/v1/user/skills/${id}`
export const USER_PRACTICE = ({id}) => `${ORIGIN}/api/v1/user/practice/${id}`
export const USER_ADDSKILL = ({id}) => `${ORIGIN}/api/v1/user/addSkill/${id}`
export const USER_REMOVESKILL = ({id}) => `${ORIGIN}/api/v1/user/status/${id}`

export const SKILL_GET_ONE = ({id}) => `${ORIGIN}/api/v1/user/skill/${id}`
export const SKILL_GET = () => `${ORIGIN}/api/v1/user/skill/`
export const SKILL_PUT = ({id}) => `${ORIGIN}/api/v1/user/skill/edit/${id}`
export const SKILL_DELETE = ({id}) => `${ORIGIN}/api/v1/user/skill/delete/${id}`
export const SKILL_REGISTER = () => `${ORIGIN}/api/v1/skill/register`

export const ATTR_GET = () => `${ORIGIN}/api/v1/attribute/get/all`
export const ATTR_REGISTER = () => `${ORIGIN}/api/v1/attribute/register`

export const UNRQUEUE_GET_SKILL = () => `${ORIGIN}/api/v1/unrQueue/get/Skill`