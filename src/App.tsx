import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster, toast } from 'react-hot-toast';
import { Layout } from './common-components/layout/layout';
import { CommentScreen } from './screen-components/comment-screen/comment-screen';
import { CommentTableScreen } from './screen-components/comment-table-screen/comment-table-screen';
import { ErrorsScreen } from './screen-components/errors-screen/errors-screen';
import { handleErrorMessage } from './utils/functions/errors-type-guards';

const App = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        mutationCache: new MutationCache({
          onError: (error, _variables, _context, mutation) => {
            if (mutation.options.onError) return;

            const errorMessage = handleErrorMessage(error);
            toast.error(errorMessage);
          },
        }),
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <div className="h-screen">
        <Toaster position="bottom-center" containerClassName="ml-64" />
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
    </QueryClientProvider>
  );
};

export default App;
