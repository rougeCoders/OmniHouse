import { firebase, usersCollection } from '../../firebase/firebase.js';

export const registerUser = async({ firstName,lastName,phone,email,password }) =>{
    try{
        const response = await firebase.auth()
        .createUserWithEmailAndPassword(email,password);
        const {user} = response;
        const userProfile = {
            uid: user.uid,
            email: email,
            displayName: firstName + " " + lastName,
            phoneNumber: phone
        };
        await usersCollection.doc(user.uid).set(userProfile);
        return { isAuth: true, user:userProfile }
    }catch(error){
        return { error: {errorCode: error.code, errorMessage: error.message} }
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
        return { user: user, error: {errorCode: error.code, errorMessage: error.message} }
    }
}

export const loginUser = async({ email,password }) =>{
    try{
        const response =await firebase.auth()
        .signInWithEmailAndPassword(email,password);
        const userProfile = await usersCollection.doc(response.user.uid).get();
        const data = userProfile.data();
        return { isAuth: true, userType: data.userType, user:data }
    }catch(error){
        return { error: {errorCode: error.code, errorMessage: error.message} }
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
        return { user: user, error: {errorCode: error.code, errorMessage: error.message} }
    }
}