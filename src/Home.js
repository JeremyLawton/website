
const Home = () => {
    const channelLink = "https://www.youtube.com/@holoen_gigimurin"
    return ( 
        <div className="home">
            <h2>Gigi Murin</h2>
            <img src="wave.png" alt="Wave"/>
            <p>
                <a href={channelLink}>@holoen_gigimurin</a>
            </p>
            <img src="Gigi-Murin_pr-img_01-810x1440.png" alt="Wave" width={400}/>

            {/* <iframe width="400" height="300" 
            src="https://www.youtube.com/embed/sF4g-50fLz8" 
            title="GG NOOBS!!! 😝  #holoJustice" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/> */}
        </div>
     );
}
 
export default Home;