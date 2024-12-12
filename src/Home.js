
const Home = () => {
    const channelLink = "https://youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&si=YDb0pjOlAGSmkyZ_"
    return ( 
        <div className="home">
            <h2>Sample Website Built From Following A Tutorial</h2>
            <img src="logo192.png" alt="bigLogo"/>
            <p>
                <a href={channelLink}>Tutorial Here</a>
            </p>
            <img src="logo512.png" alt="smallLogo" width={400}/>

            
        </div>
     );
}
 
export default Home;