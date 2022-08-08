import React from "react";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import MoviePage from "./Pages/MoviePage";
// import Form from "./Pages/Form";
// import Registration from "./Pages/Registration";
// import Thanks from "./Pages/Thanks";
// import UserList from "./Pages/UserList";

const AllRoutes = () => {
    return (
        <div className="AllRoutes">
            <BrowserRouter>
                <Routes>
                <Route path="/" element={
                    <MoviePage/>
                    } />
                    {/* <Route path="/Form" element={
                        <div>
                            <Header />
                            <Form />
                        </div>


                    } />
                    <Route path="/Registration" element={
                        <div>
                            <Header />
                            <Registration />
                        </div>
                    } />
                    <Route path="/UserList" element={
                        <div>
                            <Header />
                            <UserList />
                        </div>
                    } />
                    <Route path="/Thanks" element={
                        <div>
                            <Header />
                            <Thanks/>
                        </div>
                    } /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AllRoutes;