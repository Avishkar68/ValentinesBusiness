import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- MANUAL IMPORTS (Add your 10 users here) ---
import Krushna from './pages/krushna/Krushna';
import KrushnaSub1 from './pages/krushna/KrushnaSub1';
import KrushnaSub2 from './pages/krushna/KrushnaSub2';
import John from './pages/john/John';
import JohnSub1 from './pages/john/JohnSub1';
import JohnSub2 from './pages/john/JohnSub2';
import Raj from './pages/raj/Raj';
import RajSub1 from './pages/raj/RajSub1';
import RajSub2 from './pages/raj/RajSub2';
import Giridhar from './pages/giridhar/Giridhar';
import Kanha from './pages/kanha/Kanha';
import Preetam from './pages/preetam/Preetam';

const App = () => {
  const routesConfig = [
    { path: 'krushna', element: <Krushna />, sub1: <KrushnaSub1 />, sub2: <KrushnaSub2 /> },
    { path: 'john', element: <John />, sub1: <JohnSub1 />, sub2: <JohnSub2 /> },
    { path: 'raj', element: <Raj />, sub1: <RajSub1 />, sub2: <RajSub2 /> },
    { path: 'giridhar', element: <Giridhar />, sub1: <RajSub1 />, sub2: <RajSub2 /> },
    { path: 'kanha', element: <Kanha />, sub1: <RajSub1 />, sub2: <RajSub2 /> },
    { path: 'preetam', element: <Preetam />, sub1: <RajSub1 />, sub2: <RajSub2 /> },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotFound />} />

        {routesConfig.map((user) => (
          <React.Fragment key={user.path}>
            <Route path={`/${user.path}`} element={user.element} />
            <Route path={`/${user.path}/subpage1`} element={user.sub1} />
            <Route path={`/${user.path}/subpage2`} element={user.sub2} />
          </React.Fragment>
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

const NotFound = () => (
  <div className="h-screen flex items-center justify-center bg-gray-100">
    <h1 className="text-2xl font-bold text-gray-400">404 - Page Not Found</h1>
  </div>
);

export default App;