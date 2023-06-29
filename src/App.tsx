import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Layout } from './common-components/layout/layout';
import { CommentScreen } from './screen-components/comment-screen/comment-screen';
import { CommentTableScreen } from './screen-components/comment-table-screen/comment-table-screen';
import { ErrorsScreen } from './screen-components/errors-screen/errors-screen';

const App = () => (
  <div className="h-screen">
    <Router>
      <Layout>
        <Routes>
          <Route path="/comments" element={<CommentScreen />} />
          <Route path="/table-comments" element={<CommentTableScreen />} />
          <Route path="/errors" element={<ErrorsScreen />} />
          <Route path="*" element={<Navigate to="/comments" replace />} />
        </Routes>
      </Layout>
    </Router>
  </div>
);

export default App;
