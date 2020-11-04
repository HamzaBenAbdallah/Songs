import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        {
            title: 'Macarena',
            duration: '4:05',
        },
        {
            title: 'No Scrubs',
            duration: '3:17',
        },
        {
            title: 'All Star',
            duration: '4:32',
        },
        {
            title: 'I Want it That Way',
            duration: '2:59',
        },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer,
});
