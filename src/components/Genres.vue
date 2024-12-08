<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";

const props = defineProps(["genres"]);
const router = useRouter();
const selectedGenre = ref(28);
const response = ref(null);

const genres = [ 
  { id: 12, genreName: 'Adventure' },
  {id: 16, genreName: 'Animation' },
  {id: 35, genreName: 'Comedy' },
  {id: 10402, genreName: 'Music' },
  {id: 878, genreName: 'Sci-Fi' },
];

async function getMovieByGenre() {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&include_adult=false&with_genres=${selectedGenre.value}`);
}

function getMovieDetails(id) {
  router.push(`/movies/${id}`)
}

onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&include_adult=false&with_genres=${selectedGenre.value}`);
})
</script>

<template>
  <div class="movie-gallery">
    <select v-model="selectedGenre" @change="getMovieByGenre()">
      <option v-for="genre of genres" :value="genre.id">{{ genre.genreName }}</option>
    </select>
    <div v-if="response" class="movie-list">
      <div v-for="movie in response.data.results" :key="movie.id" class="movie-card" @click="getMovieDetails(movie.id)">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" class="movie-poster" />
        <p class="movie-title">{{ movie.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-gallery {
  text-align: center;
}

select {
  padding: 10px;
  border-radius: 5px;
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.movie-card {
  width: 200px;
  margin: 15px;
  cursor: pointer;
}

.movie-title {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 10px;
}

.movie-poster {
  width: 100%;
  border-radius: 5px;
}

.movie-card:hover .movie-poster {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.movie-card:hover .movie-title {
  color: hotpink;
}
</style>