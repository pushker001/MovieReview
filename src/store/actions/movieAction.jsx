import {} from '../reducer/tvSlice';
import axios from '../../utils/axios';
import { loadmovie  } from '../reducer/movieSlice';


export const asyncloadmovie = (id) => async  (dispatch, getState) => {
    try {
        const detail = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchprovider = await axios.get(`/movie/${id}/watch/providers`);

        const theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.reults,
            similar: similar.data,
            videos: videos.data.results.find((m) => m.type === 'Trailer'),
            watchprovider: watchprovider.data.results.IN, 
        };

        dispatch(loadmovie(theultimatedetails))


    } catch (error) {
        console.log("error: ", error)
        
    }
}