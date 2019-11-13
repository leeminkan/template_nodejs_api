const ApiErrorMessage = 
{
    "error.firstName.any.required": "First Name is required.",
    "error.firstName.any.empty": "First Name is not allowed to be empty",
    "error.firstName.string.base": "First Name must be a string",
    "error.firstName.string.min": " First Name length must be from 3 to 10 characters long",
    "error.firstName.string.max": " First Name length must be from 3 to 10 characters long",
    
    "error.lastName.any.required": "Last Name is required.",
    "error.lastName.any.empty": "Last Name is not allowed to be empty",
    "error.lastName.string.base": "Last Name must be a string",
    "error.lastName.string.min": " Last Name length must be from 3 to 20 characters long",
    "error.lastName.string.max": " Last Name length must be from 3 to 20 characters long",

    "error.email.any.required": "Email is required.",
    "error.email.any.empty": "Email is not allowed to be empty",
    "error.email.string.base": "Email format is incorrect",
    "error.email.string.email": "Email format is incorrect",

    "error.password.any.required": "Password is required.",
    "error.password.any.empty": "Password is not allowed to be empty",
    "error.password.string.base": "Password must be a string",
    "error.password.string.min": " Password length must be from 3 to 20 characters long",
    "error.password.string.max": " Password length must be from 3 to 20 characters long",
    "error.passwordConfirmation.any.required": "Password confirmation is required.",
    "error.passwordConfirmation.any.allowOnly": "Password confirmation not match.",

    "error.gender.any.required": "Gender is required.",
    "error.gender.any.empty": "Gender is not allowed to be empty",
    "error.gender.string.base": "Gender must be a string",
    "error.gender.any.allowOnly":"Gender must be male or female",

    "error.dateOfBirth.any.required": "Date of birth is required.",
    "error.dateOfBirth.date.base": "Date of birth format must be a date.",

    
    "error.hobby__id.string.regex.base": "Hobby id is invalid",
    "error.hobby_name.any.required": "Name is required.",
    "error.hobby_name.any.empty": "Name is not allowed to be empty",
    "error.hobby_name.string.base": "Name must be a string",

    
    "error.hobby_description.any.required": "Description is required.",
    "error.hobby_description.any.empty": "Description is not allowed to be empty",
    "error.hobby_description.string.base": "Description must be a string",

    "error.profile_hobbies.any.required": "Hobbies is required.",
    "error.profile_hobbies.array.base": "Hobbies must be array.",
    "error.profile_hobbies.string.regex.base": "Hobby id is invalid",

    "error.profile_religion.string.regex.base": "Religion id is invalid",
    
    "error.profile_genderCares.any.empty": "Gender Cares is not allowed to be empty",
    "error.profile_genderCares.string.base": "Gender Cares must be a string",
    "error.profile_genderCares.any.allowOnly":"Gender Cares must be male or female",

    //error custom
    "error.USER_NOT_FOUND": "User not found",
    "error.USER_EXISTED": "User not found",
    "error.EMAIL_EXISTED": "Email existed",
    "error.PASSWORD_INCORRECT": "Password is incorrect",
    
    "error.AUTHENTICATE_FAIL": "Authenticate fail",
    "error.REQUIRE_TOKEN": "Token is required.",
    
    "error.AVATAR_EMPTY": "Avatar is not allowed to be empty",
    "error.AVATAR_FORMAT": "Avatar must be image format png, jpg/jpeg.",

    "error.HOBBY_NOT_FOUND": "Hobby not found",
    "error.HOBBY_ID_INVALID": "Hobby id is invalid",

    
    "error.RELIGION_NOT_FOUND": "Religion not found",
    "error.RELIGION_ID_INVALID": "Religion id is invalid",

    
    "error.SWIPED": "You swiped!",
}
// 100: code for Joi message default 
// 200: code for custom message default 
const ApiErrorCode = 
{
    "error.firstName.any.required": 1,
}
module.exports = {
    ApiErrorCode: ApiErrorCode,
    ApiErrorMessage: ApiErrorMessage,
};