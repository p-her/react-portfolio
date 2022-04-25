import React from 'react';

import runbuddy from "../assets/img/runbuddy.png";
import weatherDashboard from "../assets/img/weather-dashboard.png";
import photoBooth from "../assets/img/photo-booth.png";
import workDay from "../assets/img/workday-schedule.png";
import foodFestival from "../assets/img/food-festival.png";

function Profile() {
  return (

    <div className=' container profile-section'>
        <h1>Profile</h1>
        <div className='row align-item-center'>
          

            <div className='col my-3 profile-body'>
                <a href='https://p-her.github.io/run-buddy/' target='_blank' rel='noreferrer'> 
                
                <img src={runbuddy} alt='' width='250' height='150'/>
                </a>

            </div>

            <div className='col my-3 profile-body'>
                <a href='https://p-her.github.io/run-buddy/' target='_blank' rel='noreferrer'> 
                
                <img src={weatherDashboard} alt='' width='250' height='150'/>
                </a>

            </div>


            <div className='col my-3 profile-body'>
                <a href='https://p-her.github.io/run-buddy/' target='_blank' rel='noreferrer'> 
                
                <img src={photoBooth} alt='' width='250' height='150'/>
                </a>

            </div>
            <div className='col my-3 profile-body'>
                <a href='https://p-her.github.io/run-buddy/' target='_blank' rel='noreferrer'> 
                
                <img src={workDay} alt='' width='250' height='150'/>
                </a>

            </div>

            <div className='col  my-3 footer-mg'>
                <a href='https://p-her.github.io/run-buddy/' target='_blank' rel='noreferrer'> 
                
                <img src={foodFestival} alt='' width='250' height='150'/>
                </a>

            </div>

        </div>
   
    
         

    </div>
   
  )
}

export default Profile