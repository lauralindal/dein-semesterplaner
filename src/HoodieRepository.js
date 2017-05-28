export default class HoodieRepository {
  getCurrentUserData() {
    return hoodie.store.find("userModules");
  }

  signIn(email, password) {
    return hoodie.account.signIn({ username: email, password: password});
  }

  deleteAccount() {
    return hoodie.account.destroy();
  }

  signUp(email, password) {
    return hoodie.account.signUp({username: email, password: password});
  }

  signOut(){
    return hoodie.account.signOut();
  }

  updateUserModules(userModules){
    return hoodie.store.update("userModules", {
      "userModules": userModules
    });
  }

  isSignedIn() {
    return hoodie.account.isSignedIn();
  }
}
