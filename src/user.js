import users from './users.json';

export function seedUserData(){
  var userModules = users.students[0].tracked_modules;
  hoodie.store.add({
    "userModules": userModules
  })
  .then(() => {
    console.log('your data has been saved')
  })
  .catch(function (error) {
    console.log('ohno', error)
  })
}
