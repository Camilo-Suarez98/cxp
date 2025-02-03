import React from 'react';
import CryptoTicket from './CryptoTicket';

const cryptosInfo = [
  {
    id: 1,
    imageName: "/eth.png",
    cryptoName: "ETH",
    value: "25.52",
    percentage: "+0.60"
  },
  {
    id: 2,
    imageName: "/sol.png",
    cryptoName: "SOL",
    value: "25.52",
    percentage: "+0.60"
  },
  {
    id: 3,
    imageName: "/bnb.png",
    cryptoName: "BNB",
    value: "25.52",
    percentage: "+0.60"
  },
  {
    id: 4,
    imageName: "/dge.png",
    cryptoName: "DGE",
    value: "55.20",
    percentage: "-0.6"
  },
  {
    id: 5,
    imageName: "/btc.png",
    cryptoName: "BTC",
    value: "55.23",
    percentage: "+0.60"
  },
  {
    id: 6,
    imageName: "/sol.png",
    cryptoName: "SOL",
    value: "-0.25",
    percentage: "-0.60"
  },
  {
    id: 7,
    imageName: "/eth.png",
    cryptoName: "ETH",
    value: "25.52",
    percentage: "+0.60"
  },
  {
    id: 8,
    imageName: "/btc.png",
    cryptoName: "BTC",
    value: "-0.25",
    percentage: "-0.60"
  }
];

const CryptoTicker = () => {
  const tickerContent = [...cryptosInfo, ...cryptosInfo, ...cryptosInfo, ...cryptosInfo];

  return (
    <div className="w-full bg-[#5B5B5C] overflow-hidden py-5">
      <div className="relative flex ticker-track">
        <div className="flex animate-ticker">
          {tickerContent.map(({
            imageName,
            cryptoName,
            value,
            percentage
          }, index) => (
            <CryptoTicket
              key={index}
              imageName={imageName}
              cryptoName={cryptoName}
              value={value}
              percentage={percentage}
            />
          ))}

          {tickerContent.map(({
            imageName,
            cryptoName,
            value,
            percentage
          }, index) => (
            <CryptoTicket
              key={index}
              imageName={imageName}
              cryptoName={cryptoName}
              value={value}
              percentage={percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoTicker;