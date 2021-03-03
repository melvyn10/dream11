import axios from "axios";

export default {
  getTeams: function() {
    return axios.get("/api/all/teams");
  },
  putNewGame: function(data) {
    console.log ("api call ",data);
    return axios.put("/api/new/game", data);
  },
  getGame: function(id) {
    return axios.get("/api/game/"+id)
  }
};
