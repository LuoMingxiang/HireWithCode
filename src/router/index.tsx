import { createBrowserRouter } from "react-router-dom";
import Welcome from '@/pages/Welcome'
import Guide from '@/pages/Guide'
import AcceptChallenge from '@/pages/AcceptChallenge'
import SubmitWork from '@/pages/SubmitWork'
import Success from '@/pages/Success'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  { path: "/guide", element: <Guide /> },
  { path: "/accept", element: <AcceptChallenge /> },
  { path: "/submit", element: <SubmitWork /> },
  { path: "/success", element: <Success /> },
]);

export { router };