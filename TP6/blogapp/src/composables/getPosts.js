import { ref } from "vue";

export default function useGetPosts() {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      posts.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
}
