<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style>
html body {
  padding: 0px;
  margin: 0px;
}

#footer {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
}

#previous-button {
  height: 40px;
  width: 140px;
  border: 1px solid #3185f7;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  background-color: #ffffff;
}

#previous-button:hover {
  color: #ffffff;
  transition-duration: 0.5s;
  background-color: #3185f7;
}

#previous-button:not(:hover) {
  transition-duration: 0.6s;
}

#next-button-disabled {
  height: 40px;
  width: 140px;
  border-radius: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  color: #ffffff;
  background-color: #bdbdbd;
}

#next-button-enabled {
  height: 40px;
  width: 140px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  color: #ffffff;
  background-color: #3185f7;
}

#next-button-enabled:hover {
  color: #ffffff;
  transition-duration: 0.5s;
  background-color: #3185f7;
}

#next-button-enabled:not(:hover) {
  transition-duration: 0.6s;
}
</style>
