let ORIGIN;

if (process.env.NODE_ENV === 'development') {
    ORIGIN = "http://localhost:5000";
}
else {
    ORIGIN = "http://status.com"
}

//user related endpoints
export const USER_REGISTER = ({
    username,
    email,
    password,
    firstName,
    lastName,
    birthday
}) => `${ORIGIN}/api/v1/user/register`;


//Check these
export const USER_STATUS = ({id}) => `${ORIGIN}/api/v1/user/status/${id}`
export const USER_SKILLS = ({id}) => `${ORIGIN}/api/v1/user/skills/${id}`
export const USER_PRACTICE = ({id}) => `${ORIGIN}/api/v1/user/practice/${id}`
export const USER_ADDSKILL = ({id}) => `${ORIGIN}/api/v1/user/addSkill/${id}`
export const USER_REMOVESKILL = ({id}) => `${ORIGIN}/api/v1/user/status/${id}`

export const SKILL_GET_ONE = () => `${ORIGIN}/api/v1/user/skill/${id}`
export const SKILL_GET = () => `${ORIGIN}/api/v1/user/skill/`
export const SKILL_PUT = ({id}) => `${ORIGIN}/api/v1/user/skill/edit/${id}`
export const SKILL_DELETE = ({id}) => `${ORIGIN}/api/v1/user/skill/delete/${id}`