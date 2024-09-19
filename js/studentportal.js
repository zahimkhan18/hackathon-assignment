 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
 import { getFirestore,collection,getDocs,doc ,updateDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyD4Cgs5V_eiZBkl97Gn1q9ywGD9xskz2EM",
   authDomain: "hackathon-a6232.firebaseapp.com",
   projectId: "hackathon-a6232",
   storageBucket: "hackathon-a6232.appspot.com",
   messagingSenderId: "234751755604",
   appId: "1:234751755604:web:51202bf504ab124dc434c1",
   measurementId: "G-ERTJF7EVKB"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 const db = getFirestore()

//==========================================================================================================================================


window.getData = async() =>{
    const querySnapshot = await getDocs(collection(db, "student"));
    let arr = [];
    querySnapshot.forEach((doc) => {
      const obj = {
        id: doc.id,
        ...doc.data(),
      };
      arr.push(obj)
      // table.innerHTML = "";
    //   console.log(doc.id, " => ", doc.data());
      table.innerHTML += `
         <tbody>
            <tr>
            <td>${obj.name}</td>
            <td>${obj.lastname}</td>
            <td>${obj.email}</td>
            <td>${obj.cnic}</td>
            <td>${obj.userType}</td>
            </tr>
         </tbody>
      `;
    });
  
}
//for firstname
const firstname = document.getElementById("firstname")

window.addEventListener("load",async()=>{
    const querySnapshot = await getDocs(collection(db, "student"));
    let arr = [];
    querySnapshot.forEach((doc) => {
      const obj = {
        id: doc.id,
        ...doc.data(),
      };
      arr.push(obj)
    //   console.log(doc.id, " => ", doc.data());
      firstname.innerHTML = `
            <button class="btn btn-primary" id="${doc.id}" onclick="changefirstname(this)">click to change name</button>
      `;
    });
 
});

window.changefirstname = async(ele) => {

    const docRef = doc(db, 'student',ele.id);
    
    const editvalue = prompt("Update your first name ")
    // Update the timestamp field with the value from the server
    const edit = await updateDoc(docRef, {
        name :editvalue,
    });
    alert("updated");
}

//----------------------------------------------------------------------------------------------------------------------------------------

//for lastname

const lastname = document.getElementById("lastname")
window.addEventListener("load",async()=>{
    const querySnapshot = await getDocs(collection(db, "student"));
    let arr = [];
    querySnapshot.forEach((doc) => {
      const obj = {
        id: doc.id,
        ...doc.data(),
      };
      arr.push(obj)
    //   console.log(doc.id, " => ", doc.data());
      lastname.innerHTML = `
            <button class="btn btn-primary" id="${doc.id}" onclick="changelastname(this)">click to change lastname</button>
      `;
    });
 
    
    
});

window.changelastname = async(ele) => {

    const docRef = doc(db, 'student',ele.id);
    
    const editvalue = prompt("Update your last name ")
    // Update the timestamp field with the value from the server
    const edit = await updateDoc(docRef, {
        lastname :editvalue,
    });
    alert("updated");
}

//--------------------------------------------------------------------------------------------------------------------------------


//for CNIC
const cnic = document.getElementById("cnic")
window.addEventListener("load",async()=>{
    const querySnapshot = await getDocs(collection(db, "student"));
    let arr = [];
    querySnapshot.forEach((doc) => {
      const obj = {
        id: doc.id,
        ...doc.data(),
      };
      arr.push(obj)
    //   console.log(doc.id, " => ", doc.data());
      cnic.innerHTML = `
            <button class="btn btn-primary" id="${doc.id}" onclick="changeCNIC(this)">click to change CNIC</button>
      `;
    });
 
    
    
});

window.changeCNIC = async(ele) => {

    const docRef = doc(db, 'student',ele.id);
    
    const editvalue = prompt("Update your cnic number ")
    // Update the timestamp field with the value from the server
    const edit = await updateDoc(docRef, {
        cnic :editvalue,
    });
    alert("updated");
}