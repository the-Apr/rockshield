import { createStore } from 'vuex'
import { db } from "@/firebase/firebaseInit";
import { collection, doc, getDocs, getDoc, updateDoc} from "firebase/firestore";

export default createStore({
  state: {

    // profile
    isAuthenticated: false,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,

    // form
    formData: [],
    formsLoaded: null,
    currentFormArray: null,
  },

  getters: {
  },

  mutations: {
    setAuthenticationStatus(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    
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

    setFormData(state, payload) {
      state.formData.push(payload)
    },

    formsLoaded(state) {
      state.formsLoaded = true;
    },

    setCurrentForm(state, payload) {
      state.currentFormArray = state.formData.filter(form => {
        return form.accountId === payload;
      })
    },

    updateStatusToDone(state, payload) {
      state.formData.forEach(form => {
        if (form.docId === payload){
          form.formDone = true;
          form.formPending =false;
        }
      })
    },

    updateStatusToPending(state, payload) {
      state.formData.forEach(form => {
        if (form.docId === payload){
          form.formDone = false;
          form.formPending = true;
          form.formInit = false;
        }
      })
    }
  },
  

  actions: {
    async getCurrentUser({commit}, user) {

      const usersCollection = collection(db, "users");

      const userDoc = doc(usersCollection, user.uid);
      const dbResults= await getDoc(userDoc);
      commit("setProfileInfo", dbResults.data());
      commit("setProfileInitials");
    },

    async getForms({commit, state}){
      const getCollection = collection(db, 'account-forms');
      const results = await getDocs(getCollection);
      results.forEach(doc => {
        if(!state.formData.some((accountInfo) => accountInfo.docId === doc.id)) {
          const data = {
            docId: doc.id,
            formDate: doc.data().formDate,
            accountId: doc.data().accountId,
            bvn: doc.data().bvn,
            lastName: doc.data().lastName,
            firstName: doc.data().firstName,
            gender: doc.data().gender,
            email: doc.data().email,
            occupation: doc.data().occupation,
            workAddress: doc.data().workAddress,
            resAddress: doc.data().resAddress,
            resState: doc.data().resState,
            resCity: doc.data().resCity,
            maritalStatus: doc.data().maritalStatus,
            idType: doc.data().idType,
            idNum: doc.data().idNum,
            nokFullName: doc.data().nokFullName,
            nokPhoneNum: doc.data().nokPhoneNum,
            nokAddress: doc.data().nokAddress,
            otp: doc.data().otp,
            chkTerms: doc.data().chkTerms,
            formPending: doc.data().formPending,
            formDraft: doc.data().formDraft,
            formPaid: doc.data().formPaid,
          };
          commit('setFormData', data);
        }
      });

      commit('formsLoaded')
    },

    async updateStatusToPaidSt({commit}, docId) {
      const getCollection = collection(db, 'account-forms');
      const getForm = doc(getCollection, docId);
      await updateDoc(getForm, {
        formDone: true,
        formPending: false,
      });
      commit('updateStatusToDone', docId);
    },

    async updateStatusToPendingSt({commit}, docId) {
      const getCollection = collection(db, 'account-forms');
      const getForm = doc(getCollection, docId);
      await updateDoc(getForm, {
        formDone: false,
        formPending: true,
        formInit: false,
      });
      commit('updateStatusToPending', docId);
    }

  },

  
  modules: {
  }
})
