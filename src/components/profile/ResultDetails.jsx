import { useEffect, useState } from "react";
import { GetResultsByUserId } from "../../api/resultApi";
import "./Profile.css";

const ResultDetails = ({ userId }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await GetResultsByUserId(userId);
        setResults(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchResults();
  }, [userId]);

  return (
    <div className="results">
      <h2>Your results:</h2>

      {results.length === 0 ? (
        <p>Play some quizzes and come back here to see the results!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result._id}>
                <td>{result.QuizId.title}</td>
                <td>{result.Score}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ResultDetails;
