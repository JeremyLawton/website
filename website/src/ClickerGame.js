import {useState} from 'react';

const ClickerGame = () => {
    const [clicks, setClicks] = useState(0);
    const [clickLevel, setClickLevel] = useState(1);
    const [upgradePrice, setUpgradePrice] = useState(10);
    const [upgradePriceIncrement, setUpgradePriceIncrement] = useState(5);

    const handleClick = (e) => {
        setClicks(clicks + clickLevel)
    }
    const handleUpgradeClick = (e) => {
        if (clicks >= upgradePrice){
            setClicks(clicks - upgradePrice);
            setUpgradePrice(upgradePrice + upgradePriceIncrement);
            setUpgradePriceIncrement(upgradePriceIncrement+1);
            setClickLevel(clickLevel + 1);

            console.log("Clicks per upgrade:"+ upgradePrice/clickLevel);
        }
        else{
            console.log("not enough clicks");
        }
    }

    return ( 
        <div className="clickerGame">
            <p>{clicks}</p>
            <div>
                <button onClick={handleClick}>Click Me</button>
                <p>{"+"}{clickLevel}</p>
            </div>
            <button onClick={handleUpgradeClick}>Upgrade Click</button>
            <p>Cost: {upgradePrice}</p>
        </div>
       
     );
}
 
export default ClickerGame;