import { Profile } from "../models/Profile.js"
import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"

class ProfilesService {
    async getProfileById(profileId) {
        const response = await api.get(`api/profiles/${profileId}`)
        logger.log('got profile in service layer', response.data)
        const newProfile = new Profile(response.data)
        AppState.activeProfile = newProfile
    }
}

export const profilesService = new ProfilesService()