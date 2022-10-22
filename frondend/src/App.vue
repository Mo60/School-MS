<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">The Woodlands Academy of Art</a>
    <div class="links">
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">View</a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
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
                <li>
                  <a href="" class="dropdown-item">
                    <router-link class="nav-link" to="/"></router-link>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Create</a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
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
                    <router-link class="nav-link" to="/addclasses">Classes</router-link>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item">
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
                <li>
                  <a href="" class="dropdown-item">
                    <router-link class="nav-link" to="/"></router-link>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <li class="nav-item"><a class="nav-link" href="/">Contact</a></li>
    </div>
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