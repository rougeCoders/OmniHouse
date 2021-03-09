import { firebase, usersCollection } from '../../firebase/firebase.js';

export const registerUser = async({ name,phone,email,password }) =>{
    try{
        const response = await firebase.auth()
        .createUserWithEmailAndPassword(email,password);
        console.log(response);
        const {user} = response;
        const userProfile = {
            uid: user.uid,
            email: email,
            name: name,
            phoneNumber: phone
        };
        await usersCollection.doc(user.uid).set(userProfile);
        return { isAuth: true, user:userProfile }
    }catch(error){
        return { error: error.code }
    }
}

export const addUserType = async(type, user) =>{
    try{
        const collection = usersCollection.doc(user.uid);
        const update = await collection.update({userType: type});

        const newUser = {
            ...user,
            ...{userType: type}
        }
        return { user: newUser, userType: type, error: null }
    }catch(error){
        return { user: user, error: error.code }
    }
}

export const loginUser = async({ email,password }) =>{
    try{
        const response = await firebase.auth()
        .signInWithEmailAndPassword(email,password);
        const userProfile = await usersCollection.doc(response.user.uid).get();
        const data = userProfile.data();
        return { isAuth: true, userType: data.userType, user:data }
    }catch(error){
        return { error: error.code }
    }
}

export const autoSignIn = () => (
    new Promise((resolve,reject)=>{
        firebase.auth().onAuthStateChanged( user => {
            if(user){
                usersCollection.doc(user.uid).get().then( snapshot =>{
                    resolve({ isAuth: true, user: snapshot.data() })
                })
            } else {
                resolve({ isAuth: false, user:[] })
            }
        })
    })
)

export const logoutUser = () => (
    firebase.auth().signOut()
)

export const updateUserData = async(values,user) => {
    try{
        const collection = usersCollection.doc(user.uid);
        const update = await collection.update(values);

        const newUser = {
            ...user,
            ...values
        }
        return { user: newUser, error: null }
    }catch(error){
        return { user: user, error: error.code }
    }
}