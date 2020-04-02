import {
    FETCH_USER_PROFILE_INFOS_PENDING,
    FETCH_USER_PROFILE_INFOS_SUCCESS,
    FETCH_USER_PROFILE_INFOS_ERROR,
    UPDATE_USER_PROFILE_INFOS_PENDING,
    UPDATE_USER_PROFILE_INFOS_SUCCESS,
    UPDATE_USER_PROFILE_INFOS_ERROR
} from "./constants";

/***
 * Fetch profile infos
 */
export const fetchUserProfileInfosPending = () => {
   return {type: FETCH_USER_PROFILE_INFOS_PENDING}
}
  
export const fetchUserProfileInfosSuccess = (payload) => {
   return {
       type: FETCH_USER_PROFILE_INFOS_SUCCESS,
       data: payload 
    }
} 

export const fetchUserProfileInfosFailed = () => {
   return {type: FETCH_USER_PROFILE_INFOS_ERROR}
} 

/**
 * Update profile infos
 */

export const updateUserProfileInfosPending = () => {
   return {type: UPDATE_USER_PROFILE_INFOS_PENDING}
}

export const updateUserProfileInfosSuccess = (payload) => {
   return {
      type: UPDATE_USER_PROFILE_INFOS_SUCCESS,
      data: payload
   }
}

export const updateUserProfileInfosFailed = () => {
   return { type: UPDATE_USER_PROFILE_INFOS_ERROR}
}