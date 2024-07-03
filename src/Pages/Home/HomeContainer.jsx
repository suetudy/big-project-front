import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePresenter from './HomePresenter';
import LoginPresenter from '../../Pages/Login/LoginPresenter';
import JoinPresenter from '../../Pages/Join/JoinPresenter';
import CommunityPresenter from '../Commnunity/CommunityPresenter';
import Chatbot from '../Chatbot/ChatbotContainer';


const HomeContainer = () => {
    return (        
        <Routes>
            <Route path='/' element={<HomePresenter />} />
            <Route path='/login' element={<LoginPresenter />} />
            <Route path='/join' element={<JoinPresenter />} />
            <Route path='/chat' element={<Chatbot/>} />
            <Route path='/community' element={<CommunityPresenter />} />
        </Routes>
    );
};

export default HomeContainer;