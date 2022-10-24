<template>
  <nav class="navbar navbar-expand-lg navbar-dark ">
  <div class="container-fluid">
    
        <a class="navbar-brand" href="/">The Woodlands Academy of Art</a>
        <div class="links">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse">
         
              <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="" role="button" data-bs-toggle="dropdown" aria-expanded="false">View</a>
                  <ul class="dropdown-menu " aria-labelledby="">
                    <li>
                      <a href="" class="dropdown-item">
                        <router-link class="nav-link" to="/students">Students</router-link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        <router-link class="nav-link" to="/parents">Parents</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/teachers">Teachers</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/classes">Classes</router-link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        <router-link class="nav-link" to="/invoices">Invoices</router-link>
                      </a>
                    </li>
                    <li>
                      <a href="" class="dropdown-item">
                        <router-link class="nav-link" to="/"></router-link>
                      </a>
                    </li>
                    <li>
                      <a href="" class="dropdown-item">
                        <router-link class="nav-link" to="/"></router-link>
                      </a>
                    </li>
                    <li>
                      <a href="" class="dropdown-item">
                        <router-link class="nav-link" to="/"></router-link>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Create</a>
                  <ul class="dropdown-menu " aria-labelledby="">
                    <li>
                      <a href="" class="dropdown-item">
                        <router-link class="nav-link" to="/addstudent">Students</router-link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        <router-link class="nav-link" to="/addparent">Parents</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/addteacher">Teachers</router-link>
                      </a>
                    </li>
                    <li>
                      <a  class="dropdown-item">
                        <router-link class="nav-link" to="/addClass">Classes</router-link>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item">
                        <router-link class="nav-link" to="/">Invoices</router-link>
                      </a>
                    </li>
                    <li>
                      <a href="" class="dropdown-item">
                        <router-link class="nav-link" to="/"></router-link>
                      </a>
                    </li>
                    <li>
                      <a href="" class="dropdown-item">
                        <router-link class="nav-link" to="/"></router-link>
                      </a>
                    </li>
                    <li>
                      <a href="" class="dropdown-item">
                        <router-link class="nav-link" to="/"></router-link>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <li class="nav-item"><a class="nav-link" href="/">Contact</a></li>

              <div class="input-group col-xs-2">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
 
</div>
            </div>
     
  </div >
      </div>
   
  </nav>
  <main>
 <RouterView></RouterView> 
  </main>
</template>


<style>
@import "./assets/app.css";
</style>

<script></script>