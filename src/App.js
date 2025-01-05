import React,{useState} from 'react';
import "./App.css";
import axios from 'axios';
function App() {
  const [formData, setFormData] = useState({
    "MDVP:Fo(Hz)": '',
    "MDVP:Fhi(Hz)": '',
    "MDVP:Flo(Hz)": '',
    "MDVP:Jitter(%)": '',
    "MDVP:Jitter(Abs)": '',
    "MDVP:RAP": '',
    "MDVP:PPQ": '',
    "Jitter:DDP": '',
    "MDVP:Shimmer": '',
    "MDVP:Shimmer(dB)": '',
    "Shimmer:APQ3": '',
    "Shimmer:APQ5": '',
    "MDVP:APQ": '',
    "Shimmer:DDA": '',
    "NHR": '',
    "HNR": '',
    "RPDE": '',
    "DFA": '',
    "spread1": '',
    "spread2": '',
    "D2": '',
    "PPE": ''
  });  
  const [prediction, setPrediction] = useState('');
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submitFormData', formData, {
        headers: {
          'Content-Type': 'application/json' // Specify JSON content type
        }
      });
      console.log('Predictions:', response.data.predictions);
      setPrediction(JSON.stringify(response.data.predictions, null, 2)); // Convert predictions to string
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="App">
      
     <form onSubmit={handleSubmit}className='form'>
  
      <input type="text" name="MDVP:Fo(Hz)" value={formData["MDVP:Fo(Hz)"]} onChange={handleInputChange} placeholder="MDVP:Fo(Hz)" className="input-field" />
      <input type="text" name="MDVP:Fhi(Hz)" value={formData["MDVP:Fhi(Hz)"]} onChange={handleInputChange} placeholder="MDVP:Fhi(Hz)"  className="input-field"/>
      <input type="text" name="MDVP:Flo(Hz)" value={formData["MDVP:Flo(Hz)"]} onChange={handleInputChange} placeholder="MDVP:Flo(Hz)"  className="input-field"/>
      <input type="text" name="MDVP:Jitter(%)" value={formData["MDVP:Jitter(%)"]} onChange={handleInputChange} placeholder="MDVP:Jitter(%)" className="input-field" />
      <input type="text" name="MDVP:Jitter(Abs)" value={formData["MDVP:Jitter(Abs)"]} onChange={handleInputChange} placeholder="MDVP:Jitter(Abs)" className="input-field" />
      <input type="text" name="MDVP:RAP" value={formData["MDVP:RAP"]} onChange={handleInputChange} placeholder="MDVP:RAP"  className="input-field"/>
      <input type="text" name="MDVP:PPQ" value={formData["MDVP:PPQ"]} onChange={handleInputChange} placeholder="MDVP:PPQ" className="input-field" />
      <input type="text" name="Jitter:DDP" value={formData["Jitter:DDP"]} onChange={handleInputChange} placeholder="Jitter:DDP" className="input-field" />
      <input type="text" name="MDVP:Shimmer" value={formData["MDVP:Shimmer"]} onChange={handleInputChange} placeholder="MDVP:Shimmer" className="input-field" />
      <input type="text" name="MDVP:Shimmer(dB)" value={formData["MDVP:Shimmer(dB)"]} onChange={handleInputChange} placeholder="MDVP:Shimmer(dB)"  className="input-field"/>
      <input type="text" name="Shimmer:APQ3" value={formData["Shimmer:APQ3"]} onChange={handleInputChange} placeholder="Shimmer:APQ3" className="input-field" />
      <input type="text" name="Shimmer:APQ5" value={formData["Shimmer:APQ5"]} onChange={handleInputChange} placeholder="Shimmer:APQ5" className="input-field" />
      <input type="text" name="MDVP:APQ" value={formData["MDVP:APQ"]} onChange={handleInputChange} placeholder="MDVP:APQ"  className="input-field"/>
      <input type="text" name="Shimmer:DDA" value={formData["Shimmer:DDA"]} onChange={handleInputChange} placeholder="Shimmer:DDA" className="input-field" />
      <input type="text" name="NHR" value={formData["NHR"]} onChange={handleInputChange} placeholder="NHR"  className="input-field"/>
      <input type="text" name="HNR" value={formData["HNR"]} onChange={handleInputChange} placeholder="HNR"  className="input-field"/>
      <input type="text" name="RPDE" value={formData["RPDE"]} onChange={handleInputChange} placeholder="RPDE"  className="input-field"/>
      <input type="text" name="DFA" value={formData["DFA"]} onChange={handleInputChange} placeholder="DFA"  className="input-field"/>
      <input type="text" name="spread1" value={formData["spread1"]} onChange={handleInputChange} placeholder="spread1" className="input-field" />
      <input type="text" name="spread2" value={formData["spread2"]} onChange={handleInputChange} placeholder="spread2" className="input-field" />
      <input type="text" name="D2" value={formData["D2"]} onChange={handleInputChange} placeholder="D2"  className="input-field"/>
      <input type="text" name="PPE" value={formData["PPE"]} onChange={handleInputChange} placeholder="PPE"  className="input-field"/>
      
      <button type="submit"className='btn'>Submit</button>
      <div className='output'>
        <textarea
          value={prediction}
          readOnly
          placeholder="Prediction Output"
          className="output-textarea"
        />
      </div>
    </form>
    
    
    </div>
   
  );
}

export default App;
