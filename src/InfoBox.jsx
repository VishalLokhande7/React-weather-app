import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from "@mui/icons-material/Grain";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BlurOnIcon from "@mui/icons-material/BlurOn";

export default function InfoBox({ info }) {
    let INIT_URL = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjB3ZWF0aGVyJTIwaW1hZ2VzfGVufDB8fDB8fHww";

    const HOT_URL = "https://images.unsplash.com/photo-1720186296382-0d50002c4b0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8";
    const RAIN_URL = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjB3ZWF0aGVyJTIwaW1hZ2VzfGVufDB8fDB8fHww";
    const SNOW_URL = "https://images.unsplash.com/photo-1676363707718-eabe464ca9ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNub3clMjB3aGVhdGhlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
    const CLOUD_URL = "https://images.unsplash.com/photo-1508914175125-ec09dc00a385?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const CLEAR_URL = "https://imgs.search.brave.com/8eOQeIbhN2a_aNA729EDa4TQVw4wDMccZrKiePozHRs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/OTE4NDg3NDYzODYt/ZDVkZTlmNWMwNWEy/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1ueDhZMnhsWVhJ/bE1qQjNaV0YwYUdW/eWZHVnVmREI4ZkRC/OGZId3c";
    const THUNDER_URL = "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGh1bmRlciUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D";
    const DRIZZLE_URL = "https://imgs.search.brave.com/J18tSTKmzrNNZye7QUe15EfEtnmBgatW6RbrK4cIrJA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzViL1Jvd19vZl9w/b3BsYXJzX2luX3Ro/ZV9kcml6emxlXy1f/Z2VvZ3JhcGgub3Jn/LnVrXy1fNTkxODIy/LmpwZw";
    const STORM_URL = "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3Rvcm13ZWF0aGVyJTIwaW1hZ2VzfGVufDB8fDB8fHww";
    const MIST_URL = "https://plus.unsplash.com/premium_photo-1673240367301-4e7d28a54281?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlzdCUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D";
    const FOG_URL = "https://images.unsplash.com/photo-1479476437642-f85d89e5ad7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9nJTIwd2VhdGhlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
    const HAZE_URL = "https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF6ZSUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D";
    const SAND_URL = "https://plus.unsplash.com/premium_photo-1724824052922-6f2d60a2a73b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D";
    const DUST_URL = "https://images.unsplash.com/photo-1662377824580-a540e7728635?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdCUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D";
    const SMOKE_URL = "https://imgs.search.brave.com/6nSrngYF68pONu6J24PvDAZYqq-uGGOPkGyVNsE7YjM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMmlk/dTVtbWo1cjVnMy5j/bG91ZGZyb250Lm5l/dC9waG90b3Nfbi9p/SEs2U0ZxS3BFOTM3/NTMxLmpwZw";

    const weatherImages = {
        Clear: CLEAR_URL,
        Clouds: CLOUD_URL,
        Rain: RAIN_URL,
        Drizzle: DRIZZLE_URL,
        Thunderstorm: THUNDER_URL,
        Snow: SNOW_URL,
        Mist: MIST_URL,
        Fog: FOG_URL,
        Haze: HAZE_URL,
        Smoke: SMOKE_URL,
        Dust: DUST_URL,
        Sand: SAND_URL,
    };

    const weatherIcons = {
        Clear: <WbSunnyIcon sx={{ color: "#FDB813", fontSize: 34 }} />,
        Clouds: <CloudIcon sx={{ color: "#78909C", fontSize: 34 }} />,
        Rain: <GrainIcon sx={{ color: "#1976D2", fontSize: 34 }} />,
        Drizzle: <GrainIcon sx={{ color: "#42A5F5", fontSize: 34 }} />,
        Thunderstorm: <ThunderstormIcon sx={{ color: "#5E35B1", fontSize: 34 }} />,
        Snow: <AcUnitIcon sx={{ color: "#03A9F4", fontSize: 34 }} />,
        Mist: <BlurOnIcon sx={{ color: "#90A4AE", fontSize: 34 }} />,
        Fog: <BlurOnIcon sx={{ color: "#78909C", fontSize: 34 }} />,
        Haze: <BlurOnIcon sx={{ color: "#B0BEC5", fontSize: 34 }} />,
        Smoke: <BlurOnIcon sx={{ color: "#757575", fontSize: 34 }} />,
        Dust: <BlurOnIcon sx={{ color: "#A1887F", fontSize: 34 }} />,
        Sand: <BlurOnIcon sx={{ color: "#D4A373", fontSize: 34 }} />,
    };

    const weatherImage = weatherImages[info.weather];
    const weatherIcon = weatherIcons[info.weather] || <CloudIcon />;

    return (
        <div className="InfoBox">
            {/* <h1>WeatherInfo - {info.city}</h1> */}
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={weatherImage}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 1,
                                fontWeight: "bold",
                            }}
                        >
                            {info.city}
                            {weatherIcon}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                            <p>Temperature: {info.temp}&deg;C</p>

                            <p>Humidity: {info.humidity}%</p>
                            <p>Min Temperature: {info.tempMin}&deg;C</p>
                            <p>Max Temperature: {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    );
};