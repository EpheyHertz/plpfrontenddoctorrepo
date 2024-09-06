# plpfrontenddoctorrepo
README FILE FOR PLP PYTHON PROJECT FRONTEND PART.
The API routes for signup and LOGIN 
/apis/signup/
/apis/login/
If the user is signup correctly then, the next thing is redirection to the update profile route that is:
/apis/update
The update method has a get method and a post method:
For the get the user sees all his or her data in her profile i.e:
User{
     Username:”username”,
    Email:”email”,
    Role:”role”,
     Profile:{
          Gender:”null”,
           Role:’’role’,
           Phone_number:”null”,
           Address:”null”
      },patient_details:{
              Id:”id”,
             Name:”username”,
             Age:0,
             Medical_history:”null”
},
}
Getting the user profile after the profile update:
Api route : /apis/user/
User{
     Username:”username”,
    Email:”email”,
    Role:”role”,
     Profile:{
          Gender:”null”,
           Role:’’role’,
           Phone_number:”null”,
           Address:”null”
      },patient_details:{
              Id:”id”,
             Name:”username”,
             Age:0,
             Medical_history:”null”
},
Appointments:[] //returns all the users appointments as an array
}
Apis to let the user view all the doctors available:
/apis/doctors
Api route to let either the patient to see all the appointments he/she has made, and also the doctor to see all the appointments the patients have made with them:
/apis/my-appointments/
Api route for a patient to book appointments with a doctor:
apis/book-appointments/
Api route for a user to signout or logout:
/apis/logout/
Api route for admins to sign in and view all the information and databases:
/admin/
What is required in the signup form:
Username,password,email,role;
What is required in the update profile:
     Profile:{
          Gender:”null”,
           Role:’’role’,
           Phone_number:”null”,
           Address:”null”
      },patient_details:{
              Id:”id”,
             Name:”username”,
             Age:0,
             Medical_history:”null”
},
NB:The role and the name will be automatically be populated to the role values and username that the user entered during signup




