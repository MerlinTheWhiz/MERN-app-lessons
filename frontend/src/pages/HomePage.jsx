import React, { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import RateLimitedUI from '../components/RateLimitedUI';
import axios from 'axios';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([]); 
  const [loading, setLoading] = useState(true)

  //to be able to fetch the notes
  useEffect(() => {
    const fetchNotes = async () => {
  try {
    const res = await axios.get("http://localhost:5300/api/notes");
    console.log(res);
  } catch (error) {
    console.log("Error fetching notes", error)
  }
}; 

fetchNotes();  
}, []);

  return (
    <div className='min-h-screen'>
      <Navbar />

      {isRateLimited && <RateLimitedUI />}
    </div>
  )
}

export default HomePage