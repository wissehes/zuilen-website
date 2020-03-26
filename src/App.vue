<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Zuilen</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="navbar-nav mr-auto">
              <router-link class="nav-link" to="/de-wijk">De Wijk</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>
