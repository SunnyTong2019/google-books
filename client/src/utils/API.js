import axios from "axios";


export default {
  searchBooks: function(query) {
    return axios.get("/api/books", { params: { q: query } });
  },

  getSavedBooks: function() {
    return axios.get("/api/saved/books");
  },

  saveBook: function(bookData) {
    return axios.post("/api/saved/books", bookData);
  },

  deleteBook: function(id) {
    return axios.delete("/api/saved/books/" + id);
  }
};







 
