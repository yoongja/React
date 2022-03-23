import { useEffect, useState } from "react";
import './CoinTracker.css';

//페이지나 앱을 들어왔을 때 로딩 메세지를 보이도록 하기
function CoinTracker() {
    const [loading,setLoading] = useState(true);
    const [coins,setCoins] = useState([]);
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers?limit=5000")
        .then(response => response.json())
        .then((json) => {
        setCoins(json);//json 즉 coin을 가지고 왔다 coin을 가지고 왔을때 setCoins해준다. 이를통해 coins 배열에 coin들이 들어가진다.
        setLoading(false); // coin을 가지고 왔으므로 set loaing을 false로 바꿔줌
        });
    },[])//useEffect를 사용해서 component의 시작시에만 render 되게 해줌
    return (
        <div>
        <h1 className={StyleSheet.Title}>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <select>
            {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        )}
      </div>
    );
}

export default CoinTracker;