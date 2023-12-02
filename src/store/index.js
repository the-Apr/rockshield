import { createStore } from 'vuex'
import { db } from "@/firebase/firebaseInit";
import { collection, doc, getDoc} from "firebase/firestore";

export default createStore({
  state: {
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,
  },

  getters: {
  },

  mutations: {
    updateUser(state, payload) {
      state.user = payload
    },

    setProfileInfo(state, payload){
      state.profileId = payload.id;
      state.profileEmail = payload.email;
      state.profileFirstName = payload.firstName;
      state.profileLastName = payload.lastName;
      state.profileUserName = payload.username;
    },

    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    },
  },

  actions: {
    async getCurrentUser({commit}, user) {

      const usersCollection = collection(db, "users");

      const userDoc = doc(usersCollection, user.uid);
      const dbResults= await getDoc(userDoc);
      commit("setProfileInfo", dbResults.data());
      commit("setProfileInitials");
    },
  },
  modules: {
  }
})
