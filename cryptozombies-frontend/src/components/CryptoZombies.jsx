import { useState, useEffect, useRef } from 'react';
import Web3 from 'web3';
import cryptoZombiesABI from '../cryptozombies_abi.json';
import './CryptoZombie.css';

const CryptoZombies = () => {
  const [web3, setWeb3] = useState(null);
  const [cryptoZombies, setCryptoZombies] = useState(null);
  const [cryptoKitties, setkittyContract] = useState(null);
  const [userAccount, setUserAccount] = useState(null);
  const [zombies, setZombies] = useState([]);
  const [status, setStatus] = useState('');
  const zombieNameRef = useRef('');

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3Instance.eth.getAccounts();
          setUserAccount(accounts[0]);

          const cryptoZombiesContract = new web3Instance.eth.Contract(
            cryptoZombiesABI,
            '0xD0ECB5FE10514D0CA9D89A08BB69bC58F973cA00'
          );
          const KittyContract = new web3Instance.eth.Contract(
            cryptoZombiesABI,
            '0xAf0AC8a423a0eAA5c54339FA9E3c52C23AbA7400'
          );

          setCryptoZombies(cryptoZombiesContract);
          setkittyContract(KittyContract);

          fetchZombies(accounts[0], cryptoZombiesContract);
        } catch (error) {
          console.error('Could not connect to wallet', error);
        }
      } else {
        console.log('Please install MetaMask!');
      }
    };

    initWeb3();
  }, []);

  const fetchZombies = async (owner, contract) => {
    const ids = await contract.methods.getZombiesByOwner(owner).call();
    const zombiesPromise = ids.map((id) => contract.methods.zombies(id).call());
    const zombies = await Promise.all(zombiesPromise);
    setZombies(zombies);
  };

  const createRandomZombie = async () => {
    const name = zombieNameRef.current.value;
    if (!name) {
      setStatus('Please enter a name for your zombie');
      return;
    }
    const gas = await cryptoZombies.methods
      .createRandomZombie(name)
      .estimateGas({ from: userAccount });
    await cryptoZombies.methods
      .createRandomZombie(name)
      .send({ from: userAccount, gas });

    zombieNameRef.current.value = '';
    fetchZombies(userAccount, cryptoZombies);
  };

  const levelUp = async (zombieId) => {
    setStatus('Leveling up your Zombie');
    await cryptoZombies.methods
      .levelUp(zombieId)
      .send({ from: userAccount, value: web3.utils.toWei('0.001', 'ether') });
    fetchZombies(userAccount, cryptoZombies);
    setStatus('Power overwhelming! Zombie successfully leveled up');
  };

  return (
    <div className='bg-gray-900 min-h-screen text-white py-8'>
      <div className='container mx-auto text-center'>
        <div className='create-buttons'>
          <input
            type='text'
            ref={zombieNameRef}
            placeholder='Enter Zombie Name'
            className='input-field'
          />
          <button className='button' onClick={createRandomZombie}>
            Create Zombie
          </button>
          <button className='button' onClick={() => createKitty()}>
            Create Kitty
          </button>
        </div>

        {status && (
          <div id='txStatus' className='txStatus'>
            <p>{status}</p>
          </div>
        )}

        <div className='flex'>
          {zombies.map((zombie, index) => (
            <div key={index} className='zombie-card'>
              <img
                src={`https://robohash.org/${index + zombie.name}?set=set2`}
                alt='Zombie'
                className='zombie-image'
              />
              <div className='zombie-stats'>
                <h3>Name: {zombie.name}</h3>
                <p>DNA: {Number(zombie.dna)}</p>
                <p>Level: {Number(zombie.level)}</p>
                <p>
                  Ready Time: {new Date(Number(zombie.readyTime) * 1000).toLocaleString()}
                </p>
                <button className='button' onClick={() => levelUp(index)}>
                  Level Up
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoZombies;
