<template>
  <div>
    <input
      type="text"
      name="city-input"
      id="city-input"
      autofocus
      v-model="city"
      v-on:keyup.enter="getWeather"
    />
    <br />
    <br />
    <div class="error" v-if="error">Ensure your city is valid!</div>
    <div class="card" v-if="weatherData">
      <h1>{{ weatherData.temp }}</h1>
      <h4>Feels like {{ weatherData.feels_like }}</h4>
      <h4>Humidity {{ weatherData.humidity }}%</h4>
      <h4>Min: {{ weatherData.temp_min }} / Max: {{ weatherData.temp_max }}</h4>
      <div class="button_cont" align="center">
        <button class="button" rel="nofollow noopener" v-bind:class="{ active: units == 'metric' }" v-on:click="changeToMetric">C</button>
        /
        <button class="button" rel="nofollow noopener" v-bind:class="{ active: units == 'imperial' }" v-on:click="changeToImperial">F</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data() {
    return {
      city: 'Singapore',
      key: '50472ba170497987888106aa81903461',
      weatherData: '',
      units: 'metric',
      error: false,
    };
  },
  methods: {
    async getWeather() {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=${this.units}&appid=${this.key}`,
          { mode: 'cors' }
        );
        const weatherData = await response.json();
        this.error = false;
        this.weatherData = weatherData.main
        for (let key of Object.keys(this.weatherData)) {
          this.weatherData[key] = Math.round(this.weatherData[key]);
          if (key != 'humidity') this.weatherData[key] += '\xB0';
        }
      }
      catch (e) {
        this.error = true;
      }
    },
    changeToMetric() {
      this.units = 'metric';
      this.getWeather();
    },
    changeToImperial() {
      this.units = 'imperial';
      this.getWeather();
    },
  },
};
</script>

<style scoped>
input {
  color: #2c3e50;
  text-align: center;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 30px;
  background: none;
  border: none;
}

input:focus {
  outline: none;
}


.card {
  margin: auto;
  padding: 30px 40px;
  width: fit-content;
  height: 250px;
  box-shadow: 0 6px 8px -6px black;
}

.button {
  margin: 10px;
  color: #494949  !important;
  text-transform: uppercase;
  background: #ffffff;
  padding: 5px 8px;
  border: 2px solid #494949 !important;
  border-radius: 6px;
  display: inline-block;
  transition: all 0.3s ease 0s;
}

.button:hover {
  color: #20bf6b !important;
  border-radius: 50px;
  border-color: #20bf6b !important;
  transition: all 0.5s ease 0s;
}

.active {
  color: #208dbf !important;
  border-radius: 50px;
  border-color: #208dbf !important;
  transition: all 0.5s ease 0s;
}

.button:focus {
  outline: none;
}

</style>
