import axios from 'axios';
import {useState} from 'react'
        export default function Footer(){
            
          const [name,setName] = useState("");
          const [email,setEmail] = useState("");
          const [password,setPassword] = useState("");
          const [passwordR,setPasswordR] = useState("");
          const [accept,setAccept] = useState(false);
          const [emailEror,setEmailEror] = useState('')

         async function Submit(e){
              let flag = true
              e.preventDefault()
              setAccept(true)

              if(name ==="" || password.length <8 || passwordR !== password ){
                flag = false
              }else flag = true

              try{
                if (flag){
                  await axios.post("http://127.0.0.1:8000/api/register",{
                     name : name ,
                     email : email ,
                     password : password,
                     password_confirmation : passwordR,

                 
                 });
             }
            }catch(eror){
              setEmailEror(eror.response.status);

            }
            


            }

              
              
             
              
          

            return<div>

  <form onSubmit={Submit}>
    <div className="text-center">
            <h3>Signup</h3>
    </div>

  {/* Name input */}
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form1Example3">Name</label>
    <input type="text"
    name="name"
    id="form1Example3"
    className="form-control"
    value={name}
    onChange={((el) => setName(el.target.value))}/>
  </div>
  {name ==="" && accept && <p className='eror'>entrer le nom svp !</p>}
  {/* Email input */}
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form1Example1">Email address</label>
    <input type="email"
    name="email"
    id="form1Example1"
    className="form-control"
    value={email}
    onChange={((el) => setEmail(el.target.value))}/>
    
  </div>
{accept && emailEror === 422 && <p style={{color:"red"}}>Email is Already existe !</p>}

  {/* Password input */}
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form1Example2">Password</label>
    <input type="password"
    name="password"
    id="form1Example2"
    className="form-control"
    value={password}
    onChange={((el) => setPassword(el.target.value))}
    />
  </div>
  {password.length < 8 && accept && <p className='eror'>entrer le mot de pass svp !</p>}

  {/* Confirme Password input */}
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form1Example4">Confirme Password</label>
    <input type="password"
     name="passwordR"
      id="form1Example4"
       className="form-control"
       value={passwordR}
       onChange={((el) => setPasswordR(el.target.value))}
       />
  </div>
  { password !== passwordR && accept && <p className='eror'>les mots de passes ne sont pas identiques !</p>}



 
  {/* Submit button */}
  <div className="text-center">
      <button type="submit" className="btn btn-primary  btn-block">Sign in</button>
  </div>
</form>

            </div>
        }