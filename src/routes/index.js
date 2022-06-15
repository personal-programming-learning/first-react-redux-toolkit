import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../views/Home';
import Results from '../views/Results';
import Detail from '../views/Detail';

const RoutesComponent = () => (
 <BrowserRouter>
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/results" element={<Results />} />
   <Route path="/detail" element={<Detail />} />
  </Routes>
 </BrowserRouter>
);

export default RoutesComponent;