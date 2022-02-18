import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "haha", duration: "4:05" },
    { title: "what tha hel", duration: "3:00" },
    { title: "all star", duration: "2:33" },
    { title: "oppa", duration: "11:11" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
