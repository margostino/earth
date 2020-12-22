import React, { useContext, useState, useEffect } from 'react';
import { IFact, IConfig } from './config/interfaces';
import { Context } from './context/context';
import axios from 'axios';

const defaultFact: IFact = {
  id: -1,
  title: "climate awareness",
  body: "global warning is real"
};

const App: React.FC = (props) => {
  const config: IConfig = JSON.parse(useContext(Context));
  const defaultProps:IFact = defaultFact;

  const [fact, setFact]: [IFact, (fact: IFact) => void] = React.useState(
    defaultFact
  );
  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState(
    ''
  );

  const renderFact = () => {
   return (  
      <div className="App">
        <ul className="fact">          
        <p>{fact.body}</p>
        </ul>
        {error && <p className="error">{error}</p>}
      </div>
    );
  }

  useEffect(() => {
    axios
        .get<IFact>("http://localhost:3000/facts", {
          headers: {
            "Content-Type": "application/json"
          },
        })
        .then(response => {
          setFact(response.data);
          setLoading(false);
          //console.log(response.data);
        })
        .catch(ex => {
          const error =
          ex.response.status === 404
            ? "Resource not found"
            : "An unexpected error has occurred";
          //console.log(error);
          //setError(error);
          setFact(defaultFact)          
          setLoading(false);
        });
    }, []);

 return (<div className="h-100 w-100 border rounded">
   {renderFact()}   
 </div>);

}

export default App;