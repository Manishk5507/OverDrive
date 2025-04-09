import React, { useState } from 'react';

function Codeforces() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const fetchUser = async () => {
    if (!username) {
      setError('Please enter a handle.');
      setData(null);
      return;
    }

    try {
      const res = await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
      const result = await res.json();

      if (result.status === 'OK' && result.result && result.result.length > 0) {
        setData(result.result[0]);
        setError('');
      } else {
        setError('User not found.');
        setData(null);
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong.');
      setData(null);
    }
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h4 className="card-title">Codeforces User Lookup</h4>
            <input className="form-control mb-2" placeholder="Enter Codeforces handle" value={username} onChange={e => setUsername(e.target.value)} />
            <button className="btn btn-primary w-100" onClick={fetchUser}>Search User</button>

        {error && <div className="alert alert-danger">{error}</div>}

        {data && (
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">{data.handle}</h5>
              <p className="card-text">
                <strong>Rating:</strong> {data.rating || 'Unrated'}<br />
                <strong>Rank:</strong> {data.rank || 'Unranked'}<br />
                <strong>Max Rating:</strong> {data.maxRating || 'N/A'}<br />
                <strong>Max Rank:</strong> {data.maxRank || 'N/A'}<br />
                <strong>Contribution:</strong> {data.contribution}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Codeforces;
