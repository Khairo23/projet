import Navbar from "./Companents/Header"
import Footer from "./Companents/Footer"
import Form from "./Form"
import { Route,Routes } from "react-router-dom"

        export default function App(){

            return<div>
                   <Navbar/> 
                   <br/>
                   <main className="container">
                         <section className="row justify-content-center">
                                 <article className="col-sm-6" style={{width:"550px"}}>
                                    <Routes>
                                          <Route path="/register" element={<Form />} />
                                    </Routes>
                                  </article>
                         </section>
                   </main>
                   <br/>
                   <Footer/>
                   </div>
        }