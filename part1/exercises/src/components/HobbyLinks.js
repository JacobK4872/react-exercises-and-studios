export default function hobbyLinks() {
    const hobbyLinks = ["https://liquipedia.net/rocketleague/Rocket_League_Championship_Series/2022-23", "https://www.weather.gov/eax/"];
    return (
        <div>
            <li><a href={hobbyLinks[0]}>Rocket League Esports</a></li>
            <li><a href={hobbyLinks[1]}>National weather Service</a></li>
        </div>
    );

}
