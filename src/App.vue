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
            <li class="nav-item">
              <router-link class="nav-link" to="/inleiding">Inleiding</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Onderdelen</a>
              <div class="dropdown-menu animate fadeIn" aria-labelledby="navbarDropdownMenuLink">
                <router-link
                  class="dropdown-item"
                  to="/onderdelen/de-wijk-in-kaart"
                >Onderdeel 2: De wijk in kaart brengen</router-link>
                <router-link
                  class="dropdown-item"
                  to="/onderdelen/analyse-van-gegevens"
                >Onderdeel 3: Analyse van de gegevens</router-link>
                <router-link
                  class="dropdown-item"
                  to="/onderdelen/probleem-en-oplossing"
                >Onderdeel 4: Probleem keuze en oplossing</router-link>
              </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/conclusie">De conclusie</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view />
    <div style="margin: 2rem;"></div>
  </div>
</template>
